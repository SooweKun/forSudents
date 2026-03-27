// import { ModalComp } from "./modules/modal/module"
import "./App.css"
import CustomCursor from "./modules/custom-cursor/cursor"
import { Toaster } from "sonner"
import { PropsExample } from "./modules/props/props-exp"
// import { ClickerComp } from "./modules/clicker-module/module"

function App() {

  return (
    <>
      {/* <ClickerComp /> */}
      <PropsExample />
      {/* <ModalComp /> */}
      {/* то что ниже это компоненты которые создают курсор и тост-уведомления при клике кнопки соответственно ( вам их трогать не надо ) */}
      <CustomCursor />
      <Toaster />
    </>
  )
}

export default App

//виртуализация