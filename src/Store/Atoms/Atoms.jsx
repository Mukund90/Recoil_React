import react from 'react'
import {atom} from 'recoil'

export const todos_list_item = atom({
key:'state_upadtion',  //uniqu_value to identify the atoms
default : 0,
});