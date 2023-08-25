import { Button } from "@nextui-org/react"
import React, { useState } from 'react';

function ButtonComponent({user, pass}) {
  const [buttonEnable, setButtonDisabled] = useState(true);
  const [buttonLoading, setButtonLoading] = useState();

  const handleClickDisabled = () => {
    setButtonDisabled(false);
    return (
      <Button size='md' isDisabled onPress={handleClickLoading} >Empezar</Button>
    );
  };
  async function postData(url, data) {
    const response = await fetch(url, {
      method: "POST", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data), 
    });
    return response.json(); 
  }
  const handleClickLoading = () => {
    //setButtonLoading(true);
    //setButtonDisabled(false)
    console.log(user)
    console.log(pass)
    postData("http://localhost:3000/api/execute", { user:user  , pass:pass }).then((data) => {
    console.log(data); 
   });
  };
  
  if (buttonEnable){
    return (<Button size='md' onPress={handleClickLoading} >Empezar</Button>)
  }
  if (buttonEnable){
    return (<Button size='md' onPress={handleClickLoading} >Empezar</Button>)
  }
  if (buttonLoading){
    return (<Button size='md' isLoading onPress={handleClickLoading} >Empezar</Button>)
  }
}

export default ButtonComponent;
