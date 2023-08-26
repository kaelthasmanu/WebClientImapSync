import { Button } from "@nextui-org/react"
import React, { useState } from 'react';

function ButtonComponent({user, pass}) {
  const [buttonEnable, setButtonDisabled] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

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
    setButtonLoading(true);
    try{
      postData("http://localhost:3000/api/execute", { user:user  , pass:pass }).then((data) => {
        if(data["message"] === 'Success' || data["message"] === 'Error'){
          setButtonLoading(false);
        } 
      });
    }
    catch(err){
      console.log(err)
    }
  };
  //|| user == "manuel.gorrin@umcc.cu"
  if(user === null){
    return (<Button size='md' isDisabled onPress={handleClickLoading} >Empezar</Button>)
  }
  else if (buttonLoading){
    return (<Button size='md' isLoading onPress={handleClickLoading} >Empezar</Button>)
    
  }
  else{
    return (<Button size='md' onPress={handleClickLoading} >Empezar</Button>)
  }
}

export default ButtonComponent;
