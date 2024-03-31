import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skUjxgQr1Tjqa87KBV69q2XzrfAjwNIYjRkTvH2yOskbMAb5Knl4LJKkl5HUIWnVC7hVc0DBFzfgR31knD8zsCcFKWvt7ntSP7KoYfkUm712K6D63ze6VZayrW5FyDOFy6H0WhWimLq7oQ1jRblEZHpKOaIpz2xvD63fVmqq5NksRKodUcdu"
})
