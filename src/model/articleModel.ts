/*
 * @Description:
 * @Autor: Rongxis
 * @Date: 2021-01-20 11:46:27
 * @LastEditors: Rongxis
 * @LastEditTime: 2021-01-21 17:33:29
 */
export interface ArticleModel {
  id: number
  status: string
  title: string
  abstractContent: string
  fullContent: string
  sourceURL: string
  imageURL: string
  timestamp: number
  platforms: string[]
  disableComment: boolean
  importance: number
  author: string
  reviewer: string
  type: string
  pageviews: number
}
