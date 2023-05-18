import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
import schemas from "./sanity/schemas";
// import {visionTool} from '@sanity/vision'

const config = defineConfig({
    projectId: '8x2djiv4',
    dataset: 'production',
    title: 'portfolio',
    apiVersion: "2023-05-17",
    basePath: "/admin",
    plugins: [deskTool()],
    schema:{types: schemas},

})

export default config