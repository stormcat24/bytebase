import axios from "axios";
import {
  DataSourceId,
  DataSource,
  DataSourceNew,
  DataSourceState,
  DataSourceType,
  InstanceId,
  ResourceObject,
  ResourceIdentifier,
} from "../../types";

function convert(dataSource: ResourceObject, rootGetters: any): DataSource {
  const databaseId = dataSource.relationships!.database.data
    ? (dataSource.relationships!.database.data as ResourceIdentifier).id
    : undefined;
  const instanceId = (dataSource.relationships!.instance
    .data as ResourceIdentifier).id;

  return {
    id: dataSource.id,
    database: databaseId
      ? rootGetters["database/databaseById"](databaseId, instanceId)
      : undefined,
    ...(dataSource.attributes as Omit<DataSource, "id" | "database">),
  };
}

const state: () => DataSourceState = () => ({
  dataSourceListByInstanceId: new Map(),
  dataSourceById: new Map(),
});

const getters = {
  adminDataSourceByInstanceId: (state: DataSourceState) => (
    instanceId: InstanceId
  ): DataSource | undefined => {
    const list = state.dataSourceListByInstanceId.get(instanceId);
    if (list) {
      for (const item of list) {
        if (item.type == "RW") {
          return item;
        }
      }
    }
    return undefined;
  },

  dataSourceListByInstanceId: (state: DataSourceState) => (
    instanceId: InstanceId
  ): DataSource[] => {
    return state.dataSourceListByInstanceId.get(instanceId) || [];
  },

  dataSourceById: (state: DataSourceState) => (
    dataSourceId: DataSourceId
  ): DataSource | undefined => {
    return state.dataSourceById.get(dataSourceId);
  },
};

const actions = {
  async fetchDataSourceListByInstanceId(
    { commit, rootGetters }: any,
    instanceId: InstanceId
  ) {
    const dataSourceList = (
      await axios.get(`/api/instance/${instanceId}/datasource`)
    ).data.data.map((datasource: ResourceObject) => {
      return convert(datasource, rootGetters);
    });

    commit("setDataSourceListByInstanceId", { instanceId, dataSourceList });

    return dataSourceList;
  },

  async fetchDataSourceById(
    { commit, rootGetters }: any,
    {
      instanceId,
      dataSourceId,
    }: { instanceId: InstanceId; dataSourceId: DataSourceId }
  ) {
    const dataSource = convert(
      (
        await axios.get(
          `/api/instance/${instanceId}/datasource/${dataSourceId}`
        )
      ).data.data,
      rootGetters
    );

    commit("setDataSourceById", {
      dataSourceId,
      dataSource,
    });
    return dataSource;
  },

  async createDataSource(
    { commit, rootGetters }: any,
    {
      instanceId,
      newDataSource,
    }: { instanceId: InstanceId; newDataSource: DataSourceNew }
  ) {
    const createdDataSource = convert(
      (
        await axios.post(`/api/instance/${instanceId}/datasource`, {
          data: {
            type: "dataSource",
            attributes: newDataSource,
          },
        })
      ).data.data,
      rootGetters
    );

    commit("appendDataSourceByInstanceId", {
      dataSource: createdDataSource,
      instanceId,
    });

    return createdDataSource;
  },

  async patchDataSource(
    { commit, rootGetters }: any,
    {
      instanceId,
      dataSource,
    }: {
      instanceId: InstanceId;
      dataSource: DataSource;
    }
  ) {
    const { id, ...attrs } = dataSource;
    const updatedDataSource = convert(
      (
        await axios.patch(
          `/api/instance/${instanceId}/datasource/${dataSource.id}`,
          {
            data: {
              type: "dataSource",
              attributes: attrs,
            },
          }
        )
      ).data.data,
      rootGetters
    );

    commit("setDataSourceById", {
      instanceId: instanceId,
      updatedDataSource,
    });

    commit("replaceDataSourceInListByInstanceId", {
      instanceId: instanceId,
      updatedDataSource,
    });

    return updatedDataSource;
  },

  async deleteDataSourceById(
    { state, commit }: { state: DataSourceState; commit: any },
    {
      instanceId,
      dataSourceId,
    }: { instanceId: InstanceId; dataSourceId: DataSourceId }
  ) {
    await axios.delete(
      `/api/instance/${instanceId}/datasource/${dataSourceId}`
    );

    commit("setDataSourceById", {
      dataSourceId: dataSourceId,
      dataSource: null,
    });

    commit("deleteDataSourceInListById", dataSourceId);
  },
};

const mutations = {
  setDataSourceListByInstanceId(
    state: DataSourceState,
    {
      instanceId,
      dataSourceList,
    }: {
      instanceId: InstanceId;
      dataSourceList: DataSource[];
    }
  ) {
    state.dataSourceListByInstanceId.set(instanceId, dataSourceList);
  },

  setDataSourceById(
    state: DataSourceState,
    {
      dataSourceId,
      dataSource,
    }: {
      dataSourceId: DataSourceId;
      dataSource: DataSource;
    }
  ) {
    state.dataSourceById.set(dataSourceId, dataSource);
  },

  appendDataSourceByInstanceId(
    state: DataSourceState,
    {
      instanceId,
      dataSource,
    }: {
      instanceId: InstanceId;
      dataSource: DataSource;
    }
  ) {
    const list = state.dataSourceListByInstanceId.get(instanceId);
    if (list) {
      list.push(dataSource);
    } else {
      state.dataSourceListByInstanceId.set(instanceId, [dataSource]);
    }
  },

  replaceDataSourceInListByInstanceId(
    state: DataSourceState,
    {
      instanceId,
      updatedDataSource,
    }: {
      instanceId: InstanceId;
      updatedDataSource: DataSource;
    }
  ) {
    const list = state.dataSourceListByInstanceId.get(instanceId);
    if (list) {
      const i = list.findIndex(
        (item: DataSource) => item.id == updatedDataSource.id
      );
      if (i != -1) {
        list[i] = updatedDataSource;
      }
    }
  },

  deleteDataSourceInListById(
    state: DataSourceState,
    {
      instanceId,
      dataSourceId,
    }: { instanceId: InstanceId; dataSourceId: DataSourceId }
  ) {
    const list = state.dataSourceListByInstanceId.get(instanceId);
    if (list) {
      const i = list.findIndex((item: DataSource) => item.id == dataSourceId);
      if (i != -1) {
        list.splice(i, 1);
      }
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
