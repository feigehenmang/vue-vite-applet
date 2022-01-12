import day from 'dayjs'
import _ from 'lodash'
import api from '@/api/request'
export default function(app) {
    app.config.globalProperties.$day = day
    // console.log(_)
    app.config.globalProperties.$_ = _
    app.config.globalProperties.$api = api
}