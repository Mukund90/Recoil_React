import { atom, atomFamily, selector, selectorFamily } from "recoil";
import axios from 'axios';
import { Todos } from "./todos";


export const linkedin_atoms = atom({
    key: "Home_state",
    default: 10,
});

export const Connection_atoms = atom({
    key: "Connection_state",
    default: 102,
});

export const Notification_atoms = atom({
    key: "Notification_state",
    default: 10,
});

export const Message_atoms = atom({
    key: "Message_state",
    default: 0,
});


export const fetched_data = selector({
    key: "fetched",
    get: async ({ get }) => {
        try {
           
            const response = await new Promise((resolve) => 
                setTimeout(async () => {
                    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
                    resolve(res.data);
                }, 5000)
            );
            return response;
        } catch (err) {
            throw err;
           
        }
    }
});


export const sum_of_three = selector({
    key: "kuch_state",
    get: ({ get }) => {
        const first = get(linkedin_atoms);
        const second = get(Connection_atoms);
        const third = get(Notification_atoms);
        const fourth = get(Message_atoms);
        return first + second + third + fourth; 
    }
});


export const element = atomFamily({
   key : "kuch_todos_haii",
   default:id=>
   {
    return Todos.find(item => item.id === id)
   }
})

export const bucket = selectorFamily({
    key : "fetched_data",
    default: async ()=>{
      const response = await axios.get('https://todo-e6hd.onrender.com/');
      
    }
})