import React from "react";
import { Todos } from "./Atoms/store/todos";

import { Connection_atoms, element, fetched_data, linkedin_atoms, Message_atoms, Notification_atoms, sum_of_three } from "./Atoms/store/atoms";
import { RecoilRoot, useRecoilStateLoadable, useRecoilTransactionObserver_UNSTABLE, useRecoilValue } from "recoil";

const APP = ()=>
{
    return (
        <div>
            <RecoilRoot>
                <Buttons/>
                <TodosItem id = {1}/>
                <TodosItem id ={1}/>
                <TodosItem id = {2}/>
                <TodosItem id ={2}/>
                </RecoilRoot>
         
        </div>
    )
}
export default APP;

const Buttons = ()=>
{
    const Home = useRecoilValue(linkedin_atoms)
    const Connection = useRecoilValue(Connection_atoms)
    const Notify = useRecoilValue(Notification_atoms)
    const Message = useRecoilValue(Message_atoms);
    const sum = useRecoilValue(sum_of_three);
    const data_fetched = useRecoilStateLoadable(fetched_data)
    
   


    // const num =  useMemo(()=>{
    //   const hello = Home + Connection +Notify + Message;
    //   {console.log('hello from useMemo')}
    //   return hello;
    // },[Home , Connection ,Notify, Message]) 

    return (
        <>
        <div className="flex items-center justify-center p-5">
          <button className="text-center p-5 bg-red-500 rounded-full text-2xl ml-5">Home{(Home>2 ? '10+' : '')}</button>
          <button className="text-center p-5 bg-red-500 rounded-full text-2xl ml-5">Connection{(Connection > 100 ? "102+" : '')} </button>
          <button className="text-center p-5 bg-red-500 rounded-full text-2xl ml-5">Notification {(Notify>5 ? "10+" : " ")}</button>
          <button className="text-center p-5 bg-red-500 rounded-full text-2xl ml-5">Message {Message}</button>
          <button className="text-center p-5 bg-red-500 rounded-full text-2xl ml-5">Me {sum}</button>
        </div>
        <div>
            {data_fetched && data_fetched.length > 0 ? (
                <h1 className="text-3xl font-semibold text-center"> title: {data_fetched[0].title}</h1>
            ):(
                <h1>something is loading....</h1>
            )}
        </div>
        </>
      
    )
}


const TodosItem = ({id})=>
{
    const current_todos = useRecoilValue(element(id));

    return (
      <div>
        <h1 className="text-2xl text-center font-semibold mt-10"> Title:{current_todos.title}</h1>
        <h1 className="text-2xl text-center font-semibold mt-10"> Description:{current_todos.description}</h1>

      </div>
    )
}