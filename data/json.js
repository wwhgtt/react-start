const json = {
  code: 200,
  data: {
    dishTypeList: [
      {
        id: 1,
        name: '特色菜',
        desc: '特色菜描述',
        dishIds: [11],
      },
      {
        id: 2,
        name: '套餐1',
        desc: '套餐1描述',
        dishIds: [12],
      },
      {
        id: 3,
        name: '套餐2',
        desc: '套餐2描述',
        dishIds: [13],
      },
      {
        id: 4,
        name: '热菜',
        desc: '热菜描述',
        dishIds: [14],
      },
      {
        id: 5,
        name: '凉菜',
        desc: '凉菜描述',
        dishIds: [15],
      },
    ],
    dishList: [
      {
        id: 11,
        name: '特色菜1',
        // 菜品类型. 0:单菜 1:套餐 2:加料 3:实体卡
        type: 0,
        aliasName: '特色菜1别名',
        unitId: '', // 单位id
        marketPrice: 10, // 原价,
        dishDesc: '这是一道特色菜1', // 菜品描述
        dishIncreaseUnit: 1, // 起卖份数
        isSingle: true, // 是否允许单点,
        stepNum: 1, // 增量设置
        currRemainTotal: 10, // 当前可销售数量
        // 属性详情
        //  /** 1：口味，做法 4：菜品属性*/
        dishPropertyTypeInfos: [
          {
            id: 1,
            name: '麻辣口味',
            type: 1,
            reprice: 10,
            isChecked: true,
          },
          {
            id: 2,
            name: '清淡口味',
            type: 1,
            reprice: -10,
          },
          {
            id: 3,
            name: '重口味',
            type: 1,
            reprice: 0,
          },
          {
            id: 4,
            name: '菜品属性1',
            type: 4,
            reprice: 10,
            isChecked: true,
          },
          {
            id: 5,
            name: '菜品属性2',
            type: 1,
            reprice: -10,
          },
          {
            id: 6,
            name: '菜品属性3',
            type: 1,
            reprice: 0,
          },
        ],
        // 配料详情
        dishIngredientInfos: [
          {
            id: 1,
            name: '青椒',
            reprice: 100,
          },
          {
            id: 2,
            name: '花椒',
            reprice: 200,
          },
          {
            id: 3,
            name: '大料',
            reprice: -100,
          },
        ],
      },
      {
        id: 12,
        name: '套餐1',
        // 菜品类型. 0:单菜 1:套餐 2:加料 3:实体卡
        type: 1,
        aliasName: '套餐1',
        unitId: '', // 单位id
        marketPrice: 10, // 原价,
        dishDesc: '这是一道特色菜1', // 菜品描述
        dishIncreaseUnit: 1, // 起卖份数
        isSingle: true, // 是否允许单点,
        stepNum: 1, // 增量设置
        currRemainTotal: 10, // 当前可销售数量
        // 属性详情
        //  /** 1：口味，做法 4：菜品属性*/
        dishPropertyTypeInfos: [
          {
            id: 1,
            name: '麻辣口味',
            type: 1,
            reprice: 10,
            isChecked: true,
          },
          {
            id: 2,
            name: '清淡口味',
            type: 1,
            reprice: -10,
          },
          {
            id: 3,
            name: '重口味',
            type: 1,
            reprice: 0,
          },
          {
            id: 4,
            name: '菜品属性1',
            type: 4,
            reprice: 10,
            isChecked: true,
          },
          {
            id: 5,
            name: '菜品属性2',
            type: 1,
            reprice: -10,
          },
          {
            id: 6,
            name: '菜品属性3',
            type: 1,
            reprice: 0,
          },
        ],
        // 配料详情
        dishIngredientInfos: [
          {
            id: 1,
            name: '青椒',
            reprice: 100,
          },
          {
            id: 2,
            name: '花椒',
            reprice: 200,
          },
          {
            id: 3,
            name: '大料',
            reprice: -100,
          },
        ],
        groups: [
          {
            id: 1,
            name: '套餐1的分类1',
            orderMin: 1,
            orderMax: 3,
            childInfos: [
              {
                id: 1,
                name: '套餐1的分类1-子菜1',
                price: 10,
                leastCellNum: 1, // 起卖份数
                isReplace: true, // 是否必选,
                isDefault: true, // 是否默认,
                isMulti: true, // 是否可以选多份,
                dishPropertyTypeInfos: [
                  {
                    id: 1,
                    name: '麻辣口味',
                    type: 1,
                    reprice: 10,
                    isChecked: true,
                  },
                  {
                    id: 2,
                    name: '清淡口味',
                    type: 1,
                    reprice: -10,
                  },
                  {
                    id: 3,
                    name: '重口味',
                    type: 1,
                    reprice: 0,
                  },
                  {
                    id: 4,
                    name: '菜品属性1',
                    type: 4,
                    reprice: 10,
                    isChecked: true,
                  },
                  {
                    id: 5,
                    name: '菜品属性2',
                    type: 1,
                    reprice: -10,
                  },
                  {
                    id: 6,
                    name: '菜品属性3',
                    type: 1,
                    reprice: 0,
                  },
                ],
                dishIngredientInfos: [
                  {
                    id: 1,
                    name: '青椒',
                    reprice: 100,
                  },
                  {
                    id: 2,
                    name: '花椒',
                    reprice: 200,
                  },
                  {
                    id: 3,
                    name: '大料',
                    reprice: -100,
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            name: '套餐1的分类2',
            orderMin: 3,
            orderMax: 6,
            childInfos: [
              {
                id: 1,
                name: '套餐1的分类2-子菜1',
                price: 100,
                leastCellNum: 0, // 起卖份数
                isReplace: false, // 是否必选,
                isDefault: false, // 是否默认,
                isMulti: false, // 是否可以选多份,
                dishPropertyTypeInfos: [
                  {
                    id: 1,
                    name: '麻辣口味',
                    type: 1,
                    reprice: 10,
                    isChecked: true,
                  },
                  {
                    id: 2,
                    name: '清淡口味',
                    type: 1,
                    reprice: -10,
                  },
                  {
                    id: 3,
                    name: '重口味',
                    type: 1,
                    reprice: 0,
                  },
                  {
                    id: 4,
                    name: '菜品属性1',
                    type: 4,
                    reprice: 10,
                    isChecked: true,
                  },
                  {
                    id: 5,
                    name: '菜品属性2',
                    type: 1,
                    reprice: -10,
                  },
                  {
                    id: 6,
                    name: '菜品属性3',
                    type: 1,
                    reprice: 0,
                  },
                ],
                dishIngredientInfos: [
                  {
                    id: 1,
                    name: '青椒',
                    reprice: 100,
                  },
                  {
                    id: 2,
                    name: '花椒',
                    reprice: 200,
                  },
                  {
                    id: 3,
                    name: '大料',
                    reprice: -100,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 13,
        name: '鱼香肉丝-单菜',
        // 菜品类型. 0:单菜 1:套餐 2:加料 3:实体卡
        type: 0,
        aliasName: '特色菜1别名',
        unitId: '', // 单位id
        marketPrice: 10, // 原价,
        dishDesc: '这是一道特色菜1', // 菜品描述
        dishIncreaseUnit: 1, // 起卖份数
        isSingle: true, // 是否允许单点,
        stepNum: 1, // 增量设置
        currRemainTotal: 10, // 当前可销售数量
        // 属性详情
        //  /** 1：口味，做法 4：菜品属性*/
        dishPropertyTypeInfos: [
          {
            id: 1,
            name: '麻辣口味',
            type: 1,
            reprice: 10,
            isChecked: true,
          },
          {
            id: 2,
            name: '清淡口味',
            type: 1,
            reprice: -10,
          },
          {
            id: 3,
            name: '重口味',
            type: 1,
            reprice: 0,
          },
          {
            id: 4,
            name: '菜品属性1',
            type: 4,
            reprice: 10,
            isChecked: true,
          },
          {
            id: 5,
            name: '菜品属性2',
            type: 1,
            reprice: -10,
          },
          {
            id: 6,
            name: '菜品属性3',
            type: 1,
            reprice: 0,
          },
        ],
        // 配料详情
        dishIngredientInfos: [
          {
            id: 1,
            name: '青椒',
            reprice: 100,
          },
          {
            id: 2,
            name: '花椒',
            reprice: 200,
          },
          {
            id: 3,
            name: '大料',
            reprice: -100,
          },
        ],
      },
      {
        id: 14,
        name: '宫保鸡丁-单菜',
        // 菜品类型. 0:单菜 1:套餐 2:加料 3:实体卡
        type: 0,
        aliasName: '特色菜1别名',
        unitId: '', // 单位id
        marketPrice: 10, // 原价,
        dishDesc: '这是一道特色菜1', // 菜品描述
        dishIncreaseUnit: 1, // 起卖份数
        isSingle: true, // 是否允许单点,
        stepNum: 1, // 增量设置
        currRemainTotal: 10, // 当前可销售数量
        // 属性详情
        //  /** 1：口味，做法 4：菜品属性*/
        dishPropertyTypeInfos: [
          {
            id: 1,
            name: '麻辣口味',
            type: 1,
            reprice: 10,
            isChecked: true,
          },
          {
            id: 2,
            name: '清淡口味',
            type: 1,
            reprice: -10,
          },
          {
            id: 3,
            name: '重口味',
            type: 1,
            reprice: 0,
          },
          {
            id: 4,
            name: '菜品属性1',
            type: 4,
            reprice: 10,
            isChecked: true,
          },
          {
            id: 5,
            name: '菜品属性2',
            type: 1,
            reprice: -10,
          },
          {
            id: 6,
            name: '菜品属性3',
            type: 1,
            reprice: 0,
          },
        ],
        // 配料详情
        dishIngredientInfos: [
          {
            id: 1,
            name: '青椒',
            reprice: 100,
          },
          {
            id: 2,
            name: '花椒',
            reprice: 200,
          },
          {
            id: 3,
            name: '大料',
            reprice: -100,
          },
        ],
      },
      {
        id: 15,
        name: '红烧排骨-单菜',
        // 菜品类型. 0:单菜 1:套餐 2:加料 3:实体卡
        type: 0,
        aliasName: '特色菜1别名',
        unitId: '', // 单位id
        marketPrice: 10, // 原价,
        dishDesc: '这是一道特色菜1', // 菜品描述
        dishIncreaseUnit: 1, // 起卖份数
        isSingle: true, // 是否允许单点,
        stepNum: 1, // 增量设置
        currRemainTotal: 10, // 当前可销售数量
        // 属性详情
        //  /** 1：口味，做法 4：菜品属性*/
        dishPropertyTypeInfos: [
          {
            id: 1,
            name: '麻辣口味',
            type: 1,
            reprice: 10,
            isChecked: true,
          },
          {
            id: 2,
            name: '清淡口味',
            type: 1,
            reprice: -10,
          },
          {
            id: 3,
            name: '重口味',
            type: 1,
            reprice: 0,
          },
          {
            id: 4,
            name: '菜品属性1',
            type: 4,
            reprice: 10,
            isChecked: true,
          },
          {
            id: 5,
            name: '菜品属性2',
            type: 1,
            reprice: -10,
          },
          {
            id: 6,
            name: '菜品属性3',
            type: 1,
            reprice: 0,
          },
        ],
        // 配料详情
        dishIngredientInfos: [
          {
            id: 1,
            name: '青椒',
            reprice: 100,
          },
          {
            id: 2,
            name: '花椒',
            reprice: 200,
          },
          {
            id: 3,
            name: '大料',
            reprice: -100,
          },
        ],
      },
    ],
  },
  time: '',
  msg: '',
};

module.exports = json;
