import { type Containers, containers }  from './containers'
import { type Controllers, controllers }  from './controllers'


export type Components = {
    containers: Containers
    controllers: Controllers
}

export const components: Components = {
    containers, 
    controllers,
}