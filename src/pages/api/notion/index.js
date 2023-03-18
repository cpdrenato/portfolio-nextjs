import { Client } from "@notionhq/client"

const notion_secret = process.env.NOTION_TOKEN
const notion_database = process.env.NOTION_DATABASE_ID

// Initializing a client
const notion = new Client({ auth: notion_secret })

export default async function handler(req, res) {
  res.header("Access-Control-Allow-Origin", "*")
  if(!notion_secret || !notion_database) throw new Error('Sem Token do Notion ou ID do Banco de Dados.')

  const query = await notion.databases.query({
    database_id: notion_database,
  })
  
  const rowsStructured = query.results.map((row) => ({
    id: row.id,
    thumbnail: row.cover && row.cover.external.url || "",
    authors: row.properties.Authors.people[0],
    title: row.properties.Page.title[0].text.content || "",
    slug: row.properties.Slug.rich_text[0].text.content || "",
    published: row.properties.Published.checkbox,
    date: row.properties.Date.date.start,
    url: row.url || ""
  }))

  res.status(200).json(rowsStructured)
}
