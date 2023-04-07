import express from 'express'

export default class App {
    public app

    constructor() {
        this.app = express()
    }
}