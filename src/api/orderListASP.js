import { get, post, patch, put } from './httpASP'

//根据订单号获得订单
export function GetCtmOrder(data, config = {}) {
    return post('/CTM_ORDER/GetCtmOrder', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//窗帘审核订单数据
export function getCurtainOrders(data, config = {}) {
    return post('/CTM_ORDER/getCurtainOrders', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//我的订单数据
export function getAllOrders(data, config = {}) {
    return post('/CTM_ORDER/getAllOrders', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//窗帘订单提交，再次提交
export function orderSettlement(data, config = {}) {
    return post('/CTM_ORDER/orderSettlement', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//墙纸和软装的订单提交
export function normalOrderSettlement(data, config = {}) {
    return post('/CTM_ORDER/normalOrderSettlement', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//修改，退回，客户修改，审核通过
export function updateCurtainOrder(data, config = {}) {
    return post('/CTM_ORDER/updateCurtainOrder', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//插入操作记录
export function InsertOperationRecord(data, config = {}) {
    return post('/ORDER_OPERATION_RECORD/InsertModel', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//获得拼接好的操作记录
export function getOperationRecord(data, config = {}) {
    return post('/ORDER_OPERATION_RECORD/getOperationRecord', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//作废订单
export function cancelOrderNew(data, config = {}) {
    return post('/CTM_ORDER/cancelOrder', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//优惠券使用记录
export function getUseRecord(data, config = {}) {
    return post('/SAL_REBATE_CERTIFICATE_RECORD/getUseRecord', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//使用记录汇总
export function getTotalRecordSum(data, config = {}) {
    return post('/SAL_REBATE_CERTIFICATE_RECORD/getTotalRecordSum', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//复制购物车数据
export function copyCartItem(data, config = {}) {
    return post('/COMMODITY_ORDER/copyCartItem', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//获得ITEM
export function getItemById(data, config = {}) {
    return post('/ITEM/getItemById', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//根据客户id查询客户
export function getCustomerInfo(data, config = {}) {
    return post('/CUSTOMER/getCustomerInfo', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//出货详情
export function getPackDetailInfo(data, config = {}) {
    return post('/PACK_DETAIL/getPackDetailInfo', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//MainController
export function RedirectMain(data, config = {}) {
    return post('/Home/Main', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//任务查询获得当月订单
export function GetTaskProgress(data, config = {}) {
    return post('/CTM_ORDER/GetTaskProgress', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//上传购买人图片
export function UploadBuyUserFiles(data, config = {}) {
    return post('/CTM_ORDER/UploadBuyUserFiles', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//查找订单包含的活动的明细
export function GetPromotionsById(data, config = {}) {
    return post('/SAL_PROMOTION/GetPromotionsById', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//查找适应的活动
export function GetPromotionByItem(data, config = {}) {
    return post('/SAL_PROMOTION/GetPromotionByItem', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//查找适应的活动
export function GetPromotionByType(data, config = {}) {
    return post('/SAL_PROMOTION/GetPromotionByType', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//获取使用过的优惠券
export function GetOrderUseRebate(data, config = {}) {
    return post('/SAL_REBATE_CERTIFICATE/GetOrderUseRebate', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//我的订单-出货列表-售后，获取部分信息
export function getReturnInfo(data, config = {}) {
    return post('/PACK_DETAIL/getReturnInfo', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//退货赔偿点击查看，获取部分信息
export function getReturnInfo2(data, config = {}) {
    return post('/PACK_DETAIL/getReturnInfo2', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//获取用户的公司信息
export function getCompanyInfo(data, config = {}) {
    return post('/PACK_DETAIL/getCompanyInfo', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//获取单据下单数量
export function GetQtyDelivery(data, config = {}) {
    return post('/PACK_DETAIL/GetQtyDelivery', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//获取对账单
export function GetBalancePeriod(data, config = {}) {
    return post('/CUSTOMER_BALANCE_PERIOD/GetBalancePeriod', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
//获取并更新快递状态
export function GetPackExpressState(data, config = {}) {
    return post('/PACK_DETAIL/GetPackExpressState', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
export function GetBuyUserInfo(data, config = {}) {
    return post('/BUYUSER_INFO/GetBuyUserInfo', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
export function InsertBuyUser(data, config = {}) {
    return post('/BUYUSER_INFO/InsertBuyUser', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
export function UpdateBuyUser(data, config = {}) {
    return post('/BUYUSER_INFO/UpdateBuyUser', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}
export function DeleteBuyUser(data, config = {}) {
    return post('/BUYUSER_INFO/DeleteBuyUser', data, config).then((res) => {
        return Promise.resolve(res);
    }).catch((err) => {
        return Promise.reject(err);
    })
}