<template>
  <DrawerContent class="max-w-[100vw]">
    <template #header>
      <div class="flex flex-col gap-y-1">
        <span>
          {{
            isEditSchema
              ? $t("database.edit-schema")
              : $t("database.change-data")
          }}
        </span>
      </div>
    </template>

    <div
      class="space-y-4 h-full w-[calc(100vw-8rem)] lg:w-[60rem] max-w-[calc(100vw-8rem)] overflow-x-auto"
    >
      <div v-if="ready">
        <div class="space-y-3">
          <div class="w-full flex items-center space-x-2">
            <AdvancedSearch
              v-model:params="state.params"
              :autofocus="false"
              :placeholder="$t('database.filter-database')"
              :scope-options="scopeOptions"
            />
            <DatabaseLabelFilter
              v-model:selected="state.selectedLabels"
              :database-list="rawDatabaseList"
              :placement="'left-start'"
            />
          </div>
          <DatabaseV1Table
            mode="ALL_SHORT"
            :show-sql-editor-button="false"
            :database-list="selectableDatabaseList"
            @update:selected-databases="handleDatabasesSelectionChanged"
          />
          <SchemalessDatabaseTable
            v-if="isEditSchema"
            mode="ALL"
            :database-list="schemalessDatabaseList"
          />
        </div>
      </div>
      <div
        v-if="!ready"
        class="w-full h-[20rem] flex items-center justify-center"
      >
        <BBSpin />
      </div>
    </div>

    <template #footer>
      <div class="flex-1 flex items-center justify-between">
        <div>
          <NTooltip v-if="flattenSelectedDatabaseUidList.length > 0">
            <template #trigger>
              <div class="textinfolabel">
                {{
                  $t("database.selected-n-databases", {
                    n: flattenSelectedDatabaseUidList.length,
                  })
                }}
              </div>
            </template>
            <div class="mx-2">
              <ul class="list-disc">
                <li v-for="db in flattenSelectedDatabaseList" :key="db.name">
                  {{ db.databaseName }}
                </li>
              </ul>
            </div>
          </NTooltip>
        </div>

        <div class="flex items-center justify-end gap-x-3">
          <NCheckbox v-if="!props.planOnly" v-model:checked="state.planOnly">
            {{ $t("issue.sql-review-only") }}
          </NCheckbox>
          <NButton @click.prevent="cancel">
            {{ $t("common.cancel") }}
          </NButton>
          <NTooltip :disabled="flattenSelectedProjectList.length <= 1">
            <template #trigger>
              <NButton
                type="primary"
                :disabled="!allowGenerateMultiDb"
                @click.prevent="generateMultiDb"
              >
                {{ $t("common.next") }}
              </NButton>
            </template>
            <span class="w-56 text-sm">
              {{ $t("database.select-databases-from-same-project") }}
            </span>
          </NTooltip>
        </div>
      </div>
    </template>
  </DrawerContent>

  <FeatureModal
    :open="!!featureModalContext.feature"
    :feature="featureModalContext.feature"
    @cancel="featureModalContext.feature = undefined"
  />

  <SchemaEditorModal
    v-if="state.showSchemaEditorModal"
    :database-id-list="schemaEditorContext.databaseIdList"
    :alter-type="'MULTI_DB'"
    :plan-only="state.planOnly"
    @close="state.showSchemaEditorModal = false"
  />
</template>

<script lang="ts" setup>
import { uniqBy } from "lodash-es";
import { NButton, NCheckbox, NTooltip } from "naive-ui";
import type { PropType } from "vue";
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { BBSpin } from "@/bbkit";
import { FeatureModal } from "@/components/FeatureGuard";
import DatabaseV1Table from "@/components/v2/Model/DatabaseV1Table";
import {
  PROJECT_V1_ROUTE_ISSUE_DETAIL,
  PROJECT_V1_ROUTE_PLAN_DETAIL,
} from "@/router/dashboard/projectV1";
import {
  useCurrentUserV1,
  useSearchDatabaseV1List,
  useDatabaseV1Store,
  useProjectV1Store,
  useAppFeature,
} from "@/store";
import type { ComposedDatabase, FeatureType } from "@/types";
import { UNKNOWN_ID, DEFAULT_PROJECT_NAME } from "@/types";
import { State } from "@/types/proto/v1/common";
import type { SearchParams } from "@/utils";
import {
  allowUsingSchemaEditor,
  instanceV1HasAlterSchema,
  filterDatabaseV1ByKeyword,
  sortDatabaseV1List,
  generateIssueName,
  extractEnvironmentResourceName,
  extractInstanceResourceName,
  extractProjectResourceName,
} from "@/utils";
import AdvancedSearch from "../AdvancedSearch";
import { useCommonSearchScopeOptions } from "../AdvancedSearch/useCommonSearchScopeOptions";
import { DatabaseLabelFilter, DrawerContent } from "../v2";
import SchemaEditorModal from "./SchemaEditorModal.vue";
import SchemalessDatabaseTable from "./SchemalessDatabaseTable.vue";

type LocalState = {
  label: string;
  showSchemaLessDatabaseList: boolean;
  selectedLabels: { key: string; value: string }[];
  selectedDatabaseUidList: Set<string>;
  showSchemaEditorModal: boolean;
  params: SearchParams;
  // planOnly is used to indicate whether only to create plan.
  planOnly: boolean;
};

const props = defineProps({
  projectName: {
    type: String,
    default: undefined,
  },
  type: {
    type: String as PropType<
      "bb.issue.database.schema.update" | "bb.issue.database.data.update"
    >,
    required: true,
  },
  planOnly: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["dismiss"]);

const router = useRouter();
const currentUserV1 = useCurrentUserV1();
const projectV1Store = useProjectV1Store();
const databaseV1Store = useDatabaseV1Store();
const disableSchemaEditor = useAppFeature(
  "bb.feature.issue.disable-schema-editor"
);

const featureModalContext = ref<{
  feature?: FeatureType;
}>({});

const schemaEditorContext = ref<{
  databaseIdList: string[];
}>({
  databaseIdList: [],
});

const state = reactive<LocalState>({
  selectedDatabaseUidList: new Set<string>(),
  label: "environment",
  showSchemaLessDatabaseList: false,
  showSchemaEditorModal: false,
  selectedLabels: [],
  params: {
    query: "",
    scopes: [],
  },
  planOnly: props.planOnly,
});

const scopeOptions = useCommonSearchScopeOptions(
  computed(() => state.params),
  computed(() => ["project", "instance", "environment"])
);

const selectedProject = computed(() => {
  if (props.projectName) {
    return projectV1Store.getProjectByName(props.projectName);
  }
  const filter = state.params.scopes.find(
    (scope) => scope.id === "project"
  )?.value;
  if (filter) {
    return projectV1Store.getProjectByName(`projects/${filter}`);
  }
  return undefined;
});

const selectedInstance = computed(() => {
  return (
    state.params.scopes.find((scope) => scope.id === "instance")?.value ??
    `${UNKNOWN_ID}`
  );
});

const selectedEnvironment = computed(() => {
  return (
    state.params.scopes.find((scope) => scope.id === "environment")?.value ??
    `${UNKNOWN_ID}`
  );
});

// Returns true if alter schema, false if change data.
const isEditSchema = computed((): boolean => {
  return props.type === "bb.issue.database.schema.update";
});

const { ready } = useSearchDatabaseV1List(
  computed(() => {
    const filters = ["instance = instances/-"];
    const project = selectedProject.value;
    if (project) {
      filters.push(`project = ${project.name}`);
    }
    return {
      filter: filters.join(" && "),
    };
  })
);

const rawDatabaseList = computed(() => {
  let list: ComposedDatabase[] = [];
  if (selectedProject.value) {
    list = databaseV1Store.databaseListByProject(selectedProject.value.name);
  } else {
    list = databaseV1Store.databaseListByUser(currentUserV1.value);
  }
  list = list.filter(
    (db) => db.syncState == State.ACTIVE && db.project !== DEFAULT_PROJECT_NAME
  );
  return list;
});

const filteredDatabaseList = computed(() => {
  const list = rawDatabaseList.value.filter((db) => {
    if (
      selectedEnvironment.value !== `${UNKNOWN_ID}` &&
      extractEnvironmentResourceName(db.effectiveEnvironment) !==
        selectedEnvironment.value
    ) {
      return false;
    }
    if (
      selectedInstance.value !== `${UNKNOWN_ID}` &&
      extractInstanceResourceName(db.instance) !== selectedInstance.value
    ) {
      return false;
    }

    const filterByKeyword = filterDatabaseV1ByKeyword(
      db,
      state.params.query.trim(),
      ["name", "environment", "instance", "project"]
    );
    if (!filterByKeyword) {
      return false;
    }

    if (state.selectedLabels.length > 0) {
      return state.selectedLabels.some((kv) => db.labels[kv.key] === kv.value);
    }

    return true;
  });

  return sortDatabaseV1List(list);
});

const selectableDatabaseList = computed(() => {
  if (isEditSchema.value) {
    return filteredDatabaseList.value.filter((db) =>
      instanceV1HasAlterSchema(db.instanceResource)
    );
  }

  return filteredDatabaseList.value;
});

const schemalessDatabaseList = computed(() => {
  return filteredDatabaseList.value.filter(
    (db) => !instanceV1HasAlterSchema(db.instanceResource)
  );
});

const flattenSelectedDatabaseUidList = computed(() => {
  return [...state.selectedDatabaseUidList];
});

const flattenSelectedProjectList = computed(() => {
  const projects = flattenSelectedDatabaseUidList.value.map((uid) => {
    return databaseV1Store.getDatabaseByUID(uid).projectEntity;
  });
  return uniqBy(projects, (project) => project.name);
});

const allowGenerateMultiDb = computed(() => {
  return (
    flattenSelectedProjectList.value.length === 1 &&
    flattenSelectedDatabaseUidList.value.length > 0
  );
});

const flattenSelectedDatabaseList = computed(() =>
  flattenSelectedDatabaseUidList.value.map(
    (id) => selectableDatabaseList.value.find((db) => db.uid === id)!
  )
);

// Also works when single db selected.
const generateMultiDb = async () => {
  if (
    flattenSelectedDatabaseList.value.length === 1 &&
    isEditSchema.value &&
    allowUsingSchemaEditor(flattenSelectedDatabaseList.value) &&
    !disableSchemaEditor.value
  ) {
    schemaEditorContext.value.databaseIdList = [
      ...flattenSelectedDatabaseUidList.value,
    ];
    state.showSchemaEditorModal = true;
    return;
  }

  if (flattenSelectedProjectList.value.length !== 1) {
    return;
  }

  const project = flattenSelectedProjectList.value[0];
  const query: Record<string, any> = {
    template: props.type,
    name: generateIssueName(
      props.type,
      flattenSelectedDatabaseList.value.map((db) => db.databaseName)
    ),
    databaseList: flattenSelectedDatabaseList.value
      .map((db) => db.name)
      .join(","),
  };

  router.push({
    name: state.planOnly
      ? PROJECT_V1_ROUTE_PLAN_DETAIL
      : PROJECT_V1_ROUTE_ISSUE_DETAIL,
    params: {
      projectId: extractProjectResourceName(project.name),
      issueSlug: "create",
      planSlug: "create",
    },
    query,
  });
};

const handleDatabasesSelectionChanged = (
  selectedDatabaseNameList: Set<string>
) => {
  state.selectedDatabaseUidList = new Set(
    Array.from(selectedDatabaseNameList).map(
      (name) => databaseV1Store.getDatabaseByName(name)?.uid
    )
  );
};

const cancel = () => {
  emit("dismiss");
};
</script>
