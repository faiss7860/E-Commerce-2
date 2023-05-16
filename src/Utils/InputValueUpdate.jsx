export function inputValueUpdate(event , UpdateFunction){
    const Data = event.target.value;
    UpdateFunction(Data);
  }