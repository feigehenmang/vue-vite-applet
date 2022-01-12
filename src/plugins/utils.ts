import { App } from 'vue'
import request from '@/api/request'
import dayjs from 'dayjs'
import _ from 'lodash'

export default function (app: App) {
  app.config.globalProperties.$api = request
  app.config.globalProperties.$day = dayjs
  app.config.globalProperties.$_ = _
}
