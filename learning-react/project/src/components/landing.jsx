import Login from "./login.jsx";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
const Landing = () => {

  const [loginOpen, setloginOpen] = useState(false);


  return (
    <div className="font-serif flex flex-col sm:gap-5 lg:gap-8 px-25 py-10">
      <p className="sm:text-7xl lg:text:9xl ">Thinking about something ? <span className="block">Share it</span></p>
      <p className="sm:text-3xl lg:text-4xl ">Read and write</p>
      <button
        type="button"
        onClick={() => {
          setloginOpen(true);
          
        }}
        className="bg-black h-20 w-50 text-white rounded-tl-[60px] rounded-br-[60px]  "
      >
        Share your story
      </button>
      <Dialog.Root open={loginOpen} onOpenChange={setloginOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl">
            <Dialog.Title className="text-xl font-semibold text-gray-900">
              Login
            </Dialog.Title>
            <Dialog.Description className="mb-6 mt-2 text-gray-500">
              Welcome back! Please enter your details.
            </Dialog.Description>
            <Login />
            <Dialog.Close asChild>
              <button
                className="absolute right-3 top-3 rounded-full p-1 text-gray-500 hover:bg-gray-100 focus:outline-none"
                aria-label="Close"
              >
                ✕
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Landing;
