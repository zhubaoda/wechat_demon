export default {
    //预约订单
    status: {
        // 20待确认 30带上门 40未支付 50取消订单 60支付 70定制中 80待收货 90售后 100已结束
        20: 'toconfirmed', 
        30: 'tovisit',
        40: 'unpaid',
        50: 'cancel',
        60: 'pay',
        70: 'making',
        80: 'toreceive',
        90: 'after',
        100: 'allover'
    },
    tab: {
        list: [
            { id: 'all', name: '全部' },
            { id: 'toconfirmed', name: '待确认' },
            { id: 'tovisit', name: '待上门' },
            { id: 'tocomplete', name: '待上传' },
            { id: 'after', name: '售后' }
        ],
        selectedId: 'all',
        scroll: !1
    },

    list: {
        all: {
            list: [],
            page: 1,
            finished: !1
        },
        toconfirmed: {
            list: [],
            page: 1,
            finished: !1
        },
        tovisit: {
            list: [],
            page: 1,
            finished: !1
        },
        tocomplete: {
            list: [],
            page: 1,
            finished: !1
        },
        after: {
            list: [],
            page: 1,
            finished: !1
        }
    },
    state_str: {
        toconfirmed: '待确认',
        tovisit: '待上门',
        unpaid: '待上传',
        pay: '待上传',
        making: '定制中',
        cancel: '交易关闭',
        contact: '联系客服',
        contactCus: '联系客户',
        toreceive: '待收货',
        after: '售后',
        allover: '已完成'     
    },
    btns: {
        toconfirmed: ['cancel', 'modify', 'confirm'],
        tovisit: ['tocomplete'],
        unpaid: ['uploading'],
        cancel: [],
        pay: ['uploading'],
        after: ['contact', 'contactCus', 'sellAfterOver']
    }
}