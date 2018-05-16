const regions =
  [
    {
      code: "320000",
      name: "江苏省",
      cities: [
        {
          code: "320500",
          name: "苏州市",
          areas: [
            {
              code: "320505",
              name: "虎丘区"
            },
            {
              code: "320506",
              name: "吴中区"
            },
            {
              code: "320507",
              name: "相城区"
            },
            {
              code: "320508",
              name: "姑苏区"
            },
            {
              code: "320509",
              name: "吴江区"
            },
            {
              code: "320581",
              name: "常熟市"
            },
            {
              code: "320582",
              name: "张家港市"
            },
            {
              code: "320583",
              name: "昆山市"
            },
            {
              code: "320585",
              name: "太仓市"
            }
          ]
        },
        {
          code: "320100",
          name: "南京市",
          areas: [
            {
              code: "320102",
              name: "玄武区"
            },
            {
              code: "320103",
              name: "白下区"
            },
            {
              code: "320104",
              name: "秦淮区"
            },
            {
              code: "320105",
              name: "建邺区"
            },
            {
              code: "320106",
              name: "鼓楼区"
            },
            {
              code: "320107",
              name: "下关区"
            },
            {
              code: "320111",
              name: "浦口区"
            },
            {
              code: "320113",
              name: "栖霞区"
            },
            {
              code: "320114",
              name: "雨花台区"
            },
            {
              code: "320115",
              name: "江宁区"
            },
            {
              code: "320116",
              name: "六合区"
            },
            {
              code: "320124",
              name: "溧水县"
            },
            {
              code: "320125",
              name: "高淳县"
            }
          ]
        },
        {
          code: "320200",
          name: "无锡市",
          areas: [
            {
              code: "320202",
              name: "崇安区"
            },
            {
              code: "320203",
              name: "南长区"
            },
            {
              code: "320204",
              name: "北塘区"
            },
            {
              code: "320205",
              name: "锡山区"
            },
            {
              code: "320206",
              name: "惠山区"
            },
            {
              code: "320211",
              name: "滨湖区"
            },
            {
              code: "320281",
              name: "江阴市"
            },
            {
              code: "320282",
              name: "宜兴市"
            }
          ]
        },
        {
          code: "320400",
          name: "常州市",
          areas: [
            {
              code: "320402",
              name: "天宁区"
            },
            {
              code: "320404",
              name: "钟楼区"
            },
            {
              code: "320405",
              name: "戚墅堰区"
            },
            {
              code: "320411",
              name: "新北区"
            },
            {
              code: "320412",
              name: "武进区"
            },
            {
              code: "320481",
              name: "溧阳市"
            },
            {
              code: "320482",
              name: "金坛市"
            }
          ]
        },
        {
          code: "321200",
          name: "泰州市",
          areas: [
            {
              code: "321202",
              name: "海陵区"
            },
            {
              code: "321203",
              name: "高港区"
            },
            {
              code: "321281",
              name: "兴化市"
            },
            {
              code: "321282",
              name: "靖江市"
            },
            {
              code: "321283",
              name: "泰兴市"
            },
            {
              code: "321284",
              name: "姜堰市"
            }
          ]
        }
      ]
    },
    {
      code: "310000",
      name: "上海市",
      cities: [
        {
          code: "310100",
          name: "上海市",
          areas: [
            {
              code: "310101",
              name: "黄浦区"
            },
            {
              code: "310104",
              name: "徐汇区"
            },
            {
              code: "310105",
              name: "长宁区"
            },
            {
              code: "310106",
              name: "静安区"
            },
            {
              code: "310107",
              name: "普陀区"
            },
            {
              code: "310108",
              name: "闸北区"
            },
            {
              code: "310109",
              name: "虹口区"
            },
            {
              code: "310110",
              name: "杨浦区"
            },
            {
              code: "310112",
              name: "闵行区"
            },
            {
              code: "310113",
              name: "宝山区"
            },
            {
              code: "310114",
              name: "嘉定区"
            },
            {
              code: "310115",
              name: "浦东新区"
            },
            {
              code: "310116",
              name: "金山区"
            },
            {
              code: "310117",
              name: "松江区"
            },
            {
              code: "310118",
              name: "青浦区"
            },
            {
              code: "310120",
              name: "奉贤区"
            },
            {
              code: "310230",
              name: "崇明县"
            }
          ]
        }
      ]
    },
    {
      code: "110000",
      name: "北京市",
      cities: [
        {
          code: "110100",
          name: "北京市",
          areas: [
            {
              code: "110101",
              name: "东城区"
            },
            {
              code: "110102",
              name: "西城区"
            },
            {
              code: "110105",
              name: "朝阳区"
            },
            {
              code: "110106",
              name: "丰台区"
            },
            {
              code: "110107",
              name: "石景山区"
            },
            {
              code: "110108",
              name: "海淀区"
            },
            {
              code: "110109",
              name: "门头沟区"
            },
            {
              code: "110111",
              name: "房山区"
            },
            {
              code: "110112",
              name: "通州区"
            },
            {
              code: "110113",
              name: "顺义区"
            },
            {
              code: "110114",
              name: "昌平区"
            },
            {
              code: "110115",
              name: "大兴区"
            },
            {
              code: "110116",
              name: "怀柔区"
            },
            {
              code: "110117",
              name: "平谷区"
            },
            {
              code: "110228",
              name: "密云县"
            },
            {
              code: "110229",
              name: "延庆县"
            }
          ]
        }
      ]
    },
    {
      code: "120000",
      name: "天津市",
      cities: [
        {
          code: "120100",
          name: "天津市",
          areas: [
            {
              code: "120101",
              name: "和平区"
            },
            {
              code: "120102",
              name: "河东区"
            },
            {
              code: "120103",
              name: "河西区"
            },
            {
              code: "120104",
              name: "南开区"
            },
            {
              code: "120105",
              name: "河北区"
            },
            {
              code: "120106",
              name: "红桥区"
            },
            {
              code: "120110",
              name: "东丽区"
            },
            {
              code: "120111",
              name: "西青区"
            },
            {
              code: "120112",
              name: "津南区"
            },
            {
              code: "120113",
              name: "北辰区"
            },
            {
              code: "120114",
              name: "武清区"
            },
            {
              code: "120115",
              name: "宝坻区"
            },
            {
              code: "120116",
              name: "滨海新区"
            },
            {
              code: "120221",
              name: "宁河县"
            },
            {
              code: "120223",
              name: "静海县"
            },
            {
              code: "120225",
              name: "蓟县"
            }
          ]
        }
      ]
    },
    {
      code: "500000",
      name: "重庆市",
      cities: [
        {
          code: "500100",
          name: "重庆市",
          areas: [
            {
              code: "500101",
              name: "万州区"
            },
            {
              code: "500102",
              name: "涪陵区"
            },
            {
              code: "500103",
              name: "渝中区"
            },
            {
              code: "500104",
              name: "大渡口区"
            },
            {
              code: "500105",
              name: "江北区"
            },
            {
              code: "500106",
              name: "沙坪坝区"
            },
            {
              code: "500107",
              name: "九龙坡区"
            },
            {
              code: "500108",
              name: "南岸区"
            },
            {
              code: "500109",
              name: "北碚区"
            },
            {
              code: "500110",
              name: "綦江区"
            },
            {
              code: "500111",
              name: "大足区"
            },
            {
              code: "500112",
              name: "渝北区"
            },
            {
              code: "500113",
              name: "巴南区"
            },
            {
              code: "500114",
              name: "黔江区"
            },
            {
              code: "500115",
              name: "长寿区"
            },
            {
              code: "500116",
              name: "江津区"
            },
            {
              code: "500117",
              name: "合川区"
            },
            {
              code: "500118",
              name: "永川区"
            },
            {
              code: "500119",
              name: "南川区"
            },
            {
              code: "500223",
              name: "潼南县"
            },
            {
              code: "500224",
              name: "铜梁县"
            },
            {
              code: "500226",
              name: "荣昌县"
            },
            {
              code: "500227",
              name: "璧山县"
            },
            {
              code: "500228",
              name: "梁平县"
            },
            {
              code: "500229",
              name: "城口县"
            },
            {
              code: "500230",
              name: "丰都县"
            },
            {
              code: "500231",
              name: "垫江县"
            },
            {
              code: "500232",
              name: "武隆县"
            },
            {
              code: "500233",
              name: "忠县"
            },
            {
              code: "500234",
              name: "开县"
            },
            {
              code: "500235",
              name: "云阳县"
            },
            {
              code: "500236",
              name: "奉节县"
            },
            {
              code: "500237",
              name: "巫山县"
            },
            {
              code: "500238",
              name: "巫溪县"
            },
            {
              code: "500240",
              name: "石柱土家族自治县"
            },
            {
              code: "500241",
              name: "秀山土家族苗族自治县"
            },
            {
              code: "500242",
              name: "酉阳土家族苗族自治县"
            },
            {
              code: "500243",
              name: "彭水苗族土家族自治县"
            }
          ]
        }
      ]
    },
    {
      code: "440000",
      name: "广东省",
      cities: [
        {
          code: "440100",
          name: "广州市",
          areas: [
            {
              code: "440103",
              name: "荔湾区"
            },
            {
              code: "440104",
              name: "越秀区"
            },
            {
              code: "440105",
              name: "海珠区"
            },
            {
              code: "440106",
              name: "天河区"
            },
            {
              code: "440111",
              name: "白云区"
            },
            {
              code: "440112",
              name: "黄埔区"
            },
            {
              code: "440113",
              name: "番禺区"
            },
            {
              code: "440114",
              name: "花都区"
            },
            {
              code: "440115",
              name: "南沙区"
            },
            {
              code: "440116",
              name: "萝岗区"
            },
            {
              code: "440183",
              name: "增城市"
            },
            {
              code: "440184",
              name: "从化市"
            }
          ]
        },
        {
          code: "440300",
          name: "深圳市",
          areas: [
            {
              code: "440303",
              name: "罗湖区"
            },
            {
              code: "440304",
              name: "福田区"
            },
            {
              code: "440305",
              name: "南山区"
            },
            {
              code: "440306",
              name: "宝安区"
            },
            {
              code: "440307",
              name: "龙岗区"
            },
            {
              code: "440308",
              name: "盐田区"
            }
          ]
        }
      ]
    },
    {
      code: "330000",
      name: "浙江省",
      cities: [
        {
          code: "330100",
          name: "杭州市",
          areas: [
            {
              code: "330102",
              name: "上城区"
            },
            {
              code: "330103",
              name: "下城区"
            },
            {
              code: "330104",
              name: "江干区"
            },
            {
              code: "330105",
              name: "拱墅区"
            },
            {
              code: "330106",
              name: "西湖区"
            },
            {
              code: "330108",
              name: "滨江区"
            },
            {
              code: "330109",
              name: "萧山区"
            },
            {
              code: "330110",
              name: "余杭区"
            },
            {
              code: "330122",
              name: "桐庐县"
            },
            {
              code: "330127",
              name: "淳安县"
            },
            {
              code: "330182",
              name: "建德市"
            },
            {
              code: "330183",
              name: "富阳市"
            },
            {
              code: "330185",
              name: "临安市"
            }
          ]
        },
        {
          code: "330600",
          name: "绍兴市",
          areas: [
            {
              code: "330681",
              name: "诸暨市"
            }
          ]
        }
      ]
    },
    {
      code: "340000",
      name: "安徽省",
      cities: [
        {
          code: "340100",
          name: "合肥市",
          areas: [
            {
              code: "340102",
              name: "瑶海区"
            },
            {
              code: "340103",
              name: "庐阳区"
            },
            {
              code: "340104",
              name: "蜀山区"
            },
            {
              code: "340111",
              name: "包河区"
            },
            {
              code: "340121",
              name: "长丰县"
            },
            {
              code: "340122",
              name: "肥东县"
            },
            {
              code: "340123",
              name: "肥西县"
            },
            {
              code: "340124",
              name: "庐江县"
            },
            {
              code: "340181",
              name: "巢湖市"
            }
          ]
        }
      ]
    },
    {
      code: "620000",
      name: "甘肃省",
      cities: [
        {
          code: "620100",
          name: "兰州市",
          areas: [
            {
              code: "620102",
              name: "城关区"
            },
            {
              code: "620103",
              name: "七里河区"
            },
            {
              code: "620104",
              name: "西固区"
            },
            {
              code: "620105",
              name: "安宁区"
            },
            {
              code: "620111",
              name: "红古区"
            },
            {
              code: "620121",
              name: "永登县"
            },
            {
              code: "620122",
              name: "皋兰县"
            },
            {
              code: "620123",
              name: "榆中县"
            }
          ]
        }
      ]
    },
    {
      code: "510000",
      name: "四川省",
      cities: [
        {
          code: "510100",
          name: "成都市",
          areas: [
            {
              code: "510104",
              name: "锦江区"
            },
            {
              code: "510105",
              name: "青羊区"
            },
            {
              code: "510106",
              name: "金牛区"
            },
            {
              code: "510107",
              name: "武侯区"
            },
            {
              code: "510108",
              name: "成华区"
            },
            {
              code: "510112",
              name: "龙泉驿区"
            },
            {
              code: "510113",
              name: "青白江区"
            },
            {
              code: "510114",
              name: "新都区"
            },
            {
              code: "510115",
              name: "温江区"
            },
            {
              code: "510121",
              name: "金堂县"
            },
            {
              code: "510122",
              name: "双流县"
            },
            {
              code: "510124",
              name: "郫县"
            },
            {
              code: "510129",
              name: "大邑县"
            },
            {
              code: "510131",
              name: "蒲江县"
            },
            {
              code: "510132",
              name: "新津县"
            },
            {
              code: "510181",
              name: "都江堰市"
            },
            {
              code: "510182",
              name: "彭州市"
            },
            {
              code: "510183",
              name: "邛崃市"
            },
            {
              code: "510184",
              name: "崇州市"
            }
          ]
        }
      ]
    },
    {
      code: "610000",
      name: "陕西省",
      cities: [
        {
          code: "610100",
          name: "西安市",
          areas: [
            {
              code: "610102",
              name: "新城区"
            },
            {
              code: "610103",
              name: "碑林区"
            },
            {
              code: "610104",
              name: "莲湖区"
            },
            {
              code: "610111",
              name: "灞桥区"
            },
            {
              code: "610112",
              name: "未央区"
            },
            {
              code: "610113",
              name: "雁塔区"
            },
            {
              code: "610114",
              name: "阎良区"
            },
            {
              code: "610115",
              name: "临潼区"
            },
            {
              code: "610116",
              name: "长安区"
            },
            {
              code: "610122",
              name: "蓝田县"
            },
            {
              code: "610124",
              name: "周至县"
            },
            {
              code: "610125",
              name: "户县"
            },
            {
              code: "610126",
              name: "高陵县"
            }
          ]
        }
      ]
    },
    {
      code: "430000",
      name: "湖南省",
      cities: [
        {
          code: "430100",
          name: "长沙市",
          areas: [
            {
              code: "430102",
              name: "芙蓉区"
            },
            {
              code: "430103",
              name: "天心区"
            },
            {
              code: "430104",
              name: "岳麓区"
            },
            {
              code: "430105",
              name: "开福区"
            },
            {
              code: "430111",
              name: "雨花区"
            },
            {
              code: "430112",
              name: "望城区"
            },
            {
              code: "430121",
              name: "长沙县"
            },
            {
              code: "430124",
              name: "宁乡县"
            },
            {
              code: "430181",
              name: "浏阳市"
            }
          ]
        }
      ]
    },
    {
      code: "420000",
      name: "湖北省",
      cities: [
        {
          code: "420100",
          name: "武汉市",
          areas: [
            {
              code: "420102",
              name: "江岸区"
            },
            {
              code: "420103",
              name: "江汉区"
            },
            {
              code: "420104",
              name: "楚口区"
            },
            {
              code: "420105",
              name: "汉阳区"
            },
            {
              code: "420106",
              name: "武昌区"
            },
            {
              code: "420107",
              name: "青山区"
            },
            {
              code: "420111",
              name: "洪山区"
            },
            {
              code: "420112",
              name: "东西湖区"
            },
            {
              code: "420113",
              name: "汉南区"
            },
            {
              code: "420114",
              name: "蔡甸区"
            },
            {
              code: "420115",
              name: "江夏区"
            },
            {
              code: "420116",
              name: "黄陂区"
            },
            {
              code: "420117",
              name: "新洲区"
            }
          ]
        }
      ]
    },
    {
      code: "360000",
      name: "江西省",
      cities: [
        {
          code: "360100",
          name: "南昌市",
          areas: [
            {
              code: "360102",
              name: "东湖区"
            },
            {
              code: "360103",
              name: "西湖区"
            },
            {
              code: "360104",
              name: "青云谱区"
            },
            {
              code: "360105",
              name: "湾里区"
            },
            {
              code: "360111",
              name: "青山湖区"
            },
            {
              code: "360121",
              name: "南昌县"
            },
            {
              code: "360122",
              name: "新建县"
            },
            {
              code: "360123",
              name: "安义县"
            },
            {
              code: "360124",
              name: "进贤县"
            }
          ]
        },
        {
          code: "360400",
          name: "九江市",
          areas: [
            {
              code: "360402",
              name: "庐山区"
            },
            {
              code: "360403",
              name: "浔阳区"
            },
            {
              code: "360421",
              name: "九江县"
            },
            {
              code: "360423",
              name: "武宁县"
            },
            {
              code: "360424",
              name: "修水县"
            },
            {
              code: "360425",
              name: "永修县"
            },
            {
              code: "360426",
              name: "德安县"
            },
            {
              code: "360427",
              name: "星子县"
            },
            {
              code: "360428",
              name: "都昌县"
            },
            {
              code: "360429",
              name: "湖口县"
            },
            {
              code: "360430",
              name: "彭泽县"
            },
            {
              code: "360481",
              name: "瑞昌市"
            },
            {
              code: "360482",
              name: "共青城市"
            }
          ]
        },
        {
          code: "361000",
          name: "抚州市",
          areas: [
            {
              code: "361002",
              name: "临川区"
            },
            {
              code: "361021",
              name: "南城县"
            },
            {
              code: "361022",
              name: "黎川县"
            },
            {
              code: "361023",
              name: "南丰县"
            },
            {
              code: "361024",
              name: "崇仁县"
            },
            {
              code: "361025",
              name: "乐安县"
            },
            {
              code: "361026",
              name: "宜黄县"
            },
            {
              code: "361027",
              name: "金溪县"
            },
            {
              code: "361028",
              name: "资溪县"
            },
            {
              code: "361029",
              name: "东乡县"
            },
            {
              code: "361030",
              name: "广昌县"
            }
          ]
        },
        {
          code: "360200",
          name: "景德镇市",
          areas: [
            {
              code: "360202",
              name: "昌江区"
            },
            {
              code: "360203",
              name: "珠山区"
            },
            {
              code: "360222",
              name: "浮梁县"
            },
            {
              code: "360281",
              name: "乐平市"
            }
          ]
        }
      ]
    },
    {
      code: "130000",
      name: "河北省",
      cities: [
        {
          code: "130600",
          name: "保定市",
          areas: [
            {
              code: "130602",
              name: "新市区"
            },
            {
              code: "130603",
              name: "北市区"
            },
            {
              code: "130604",
              name: "南市区"
            },
            {
              code: "130621",
              name: "满城县"
            },
            {
              code: "130622",
              name: "清苑县"
            },
            {
              code: "130623",
              name: "涞水县"
            },
            {
              code: "130624",
              name: "阜平县"
            },
            {
              code: "130625",
              name: "徐水县"
            },
            {
              code: "130626",
              name: "定兴县"
            },
            {
              code: "130627",
              name: "唐县"
            },
            {
              code: "130628",
              name: "高阳县"
            },
            {
              code: "130629",
              name: "容城县"
            },
            {
              code: "130630",
              name: "涞源县"
            },
            {
              code: "130631",
              name: "望都县"
            },
            {
              code: "130632",
              name: "安新县"
            },
            {
              code: "130633",
              name: "易县"
            },
            {
              code: "130634",
              name: "曲阳县"
            },
            {
              code: "130635",
              name: "蠡县"
            },
            {
              code: "130636",
              name: "顺平县"
            },
            {
              code: "130637",
              name: "博野县"
            },
            {
              code: "130638",
              name: "雄县"
            },
            {
              code: "130681",
              name: "涿州市"
            },
            {
              code: "130682",
              name: "定州市"
            },
            {
              code: "130683",
              name: "安国市"
            },
            {
              code: "130684",
              name: "高碑店市"
            }
          ]
        },
        {
          code: "130800",
          name: "承德市",
          areas: [
            {
              code: "130802",
              name: "双桥区"
            },
            {
              code: "130803",
              name: "双滦区"
            },
            {
              code: "130804",
              name: "鹰手营子矿区"
            },
            {
              code: "130821",
              name: "承德县"
            },
            {
              code: "130822",
              name: "兴隆县"
            },
            {
              code: "130823",
              name: "平泉县"
            },
            {
              code: "130824",
              name: "滦平县"
            },
            {
              code: "130825",
              name: "隆化县"
            },
            {
              code: "130826",
              name: "丰宁满族自治县"
            },
            {
              code: "130827",
              name: "宽城满族自治县"
            },
            {
              code: "130828",
              name: "围场满族蒙古族自治县"
            }
          ]
        }
      ]
    },
    {
      code: "350000",
      name: "福建省",
      cities: [
        {
          code: "350100",
          name: "福州市",
          areas: [
            {
              code: "350102",
              name: "鼓楼区"
            },
            {
              code: "350103",
              name: "台江区"
            },
            {
              code: "350104",
              name: "仓山区"
            },
            {
              code: "350105",
              name: "马尾区"
            },
            {
              code: "350111",
              name: "晋安区"
            },
            {
              code: "350121",
              name: "闽侯县"
            },
            {
              code: "350122",
              name: "连江县"
            },
            {
              code: "350123",
              name: "罗源县"
            },
            {
              code: "350124",
              name: "闽清县"
            },
            {
              code: "350125",
              name: "永泰县"
            },
            {
              code: "350128",
              name: "平潭县"
            },
            {
              code: "350181",
              name: "福清市"
            },
            {
              code: "350182",
              name: "长乐市"
            }
          ]
        },
        {
          code: "350200",
          name: "厦门市",
          areas: [
            {
              code: "350203",
              name: "思明区"
            },
            {
              code: "350205",
              name: "海沧区"
            },
            {
              code: "350206",
              name: "湖里区"
            },
            {
              code: "350211",
              name: "集美区"
            },
            {
              code: "350212",
              name: "同安区"
            },
            {
              code: "350213",
              name: "翔安区"
            }
          ]
        }
      ]
    },
    {
      code: "370000",
      name: "山东省",
      cities: [
        {
          code: "370100",
          name: "济南市",
          areas: [
            {
              code: "370102",
              name: "历下区"
            },
            {
              code: "370103",
              name: "市中区"
            },
            {
              code: "370104",
              name: "槐荫区"
            },
            {
              code: "370105",
              name: "天桥区"
            },
            {
              code: "370112",
              name: "历城区"
            },
            {
              code: "370113",
              name: "长清区"
            },
            {
              code: "370124",
              name: "平阴县"
            },
            {
              code: "370125",
              name: "济阳县"
            },
            {
              code: "370126",
              name: "商河县"
            },
            {
              code: "370181",
              name: "章丘市"
            }
          ]
        },
        {
          code: "370200",
          name: "青岛市",
          areas: [
            {
              code: "370202",
              name: "市南区"
            },
            {
              code: "370203",
              name: "市北区"
            },
            {
              code: "370205",
              name: "四方区"
            },
            {
              code: "370211",
              name: "黄岛区"
            },
            {
              code: "370212",
              name: "崂山区"
            },
            {
              code: "370213",
              name: "李沧区"
            },
            {
              code: "370214",
              name: "城阳区"
            },
            {
              code: "370281",
              name: "胶州市"
            },
            {
              code: "370282",
              name: "即墨市"
            },
            {
              code: "370283",
              name: "平度市"
            },
            {
              code: "370284",
              name: "胶南市"
            },
            {
              code: "370285",
              name: "莱西市"
            }
          ]
        }
      ]
    },
    {
      code: "410000",
      name: "河南省",
      cities: [
        {
          code: "410100",
          name: "郑州市",
          areas: [
            {
              code: "410102",
              name: "中原区"
            },
            {
              code: "410103",
              name: "二七区"
            },
            {
              code: "410104",
              name: "管城回族区"
            },
            {
              code: "410105",
              name: "金水区"
            },
            {
              code: "410106",
              name: "上街区"
            },
            {
              code: "410108",
              name: "惠济区"
            },
            {
              code: "410122",
              name: "中牟县"
            },
            {
              code: "410181",
              name: "巩义市"
            },
            {
              code: "410182",
              name: "荥阳市"
            },
            {
              code: "410183",
              name: "新密市"
            },
            {
              code: "410184",
              name: "新郑市"
            },
            {
              code: "410185",
              name: "登封市"
            }
          ]
        }
      ]
    },
    {
      code: "230000",
      name: "黑龙江省",
      cities: [
        {
          code: "230100",
          name: "哈尔滨市",
          areas: [
            {
              code: "230102",
              name: "道里区"
            },
            {
              code: "230103",
              name: "南岗区"
            },
            {
              code: "230104",
              name: "道外区"
            },
            {
              code: "230108",
              name: "平房区"
            },
            {
              code: "230109",
              name: "松北区"
            },
            {
              code: "230110",
              name: "香坊区"
            },
            {
              code: "230111",
              name: "呼兰区"
            },
            {
              code: "230112",
              name: "阿城区"
            },
            {
              code: "230123",
              name: "依兰县"
            },
            {
              code: "230124",
              name: "方正县"
            },
            {
              code: "230125",
              name: "宾县"
            },
            {
              code: "230126",
              name: "巴彦县"
            },
            {
              code: "230127",
              name: "木兰县"
            },
            {
              code: "230128",
              name: "通河县"
            },
            {
              code: "230129",
              name: "延寿县"
            },
            {
              code: "230182",
              name: "双城市"
            },
            {
              code: "230183",
              name: "尚志市"
            },
            {
              code: "230184",
              name: "五常市"
            }
          ]
        }
      ]
    },
    {
      code: "210000",
      name: "辽宁省",
      cities: [
        {
          code: "210100",
          name: "沈阳市",
          areas: [
            {
              code: "210102",
              name: "和平区"
            },
            {
              code: "210103",
              name: "沈河区"
            },
            {
              code: "210104",
              name: "大东区"
            },
            {
              code: "210105",
              name: "皇姑区"
            },
            {
              code: "210106",
              name: "铁西区"
            },
            {
              code: "210111",
              name: "苏家屯区"
            },
            {
              code: "210112",
              name: "东陵区"
            },
            {
              code: "210113",
              name: "沈北新区"
            },
            {
              code: "210114",
              name: "于洪区"
            },
            {
              code: "210122",
              name: "辽中县"
            },
            {
              code: "210123",
              name: "康平县"
            },
            {
              code: "210124",
              name: "法库县"
            },
            {
              code: "210181",
              name: "新民市"
            }
          ]
        },
        {
          code: "210200",
          name: "大连市",
          areas: [
            {
              code: "210202",
              name: "中山区"
            },
            {
              code: "210203",
              name: "西岗区"
            },
            {
              code: "210204",
              name: "沙河口区"
            },
            {
              code: "210211",
              name: "甘井子区"
            },
            {
              code: "210212",
              name: "旅顺口区"
            },
            {
              code: "210213",
              name: "金州区"
            },
            {
              code: "210224",
              name: "长海县"
            },
            {
              code: "210281",
              name: "瓦房店市"
            },
            {
              code: "210282",
              name: "普兰店市"
            },
            {
              code: "210283",
              name: "庄河市"
            }
          ]
        }
      ]
    }
  ];

export default regions;