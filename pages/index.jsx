import React, { useState } from 'react';
import Head from 'next/head'
import { Transition, CSSTransition } from 'react-transition-group';

const SLIDE_STYLE = {
  entering: {
    transition: 'all .5s ease',
    transform: 'translateX(-150%)',
  },
  entered: {
    transition: '',
    transform: 'translateX(-150%)',
  },
};

const BORDER = ({ show, children, ...callBack }) => (
  <CSSTransition
    in={show}
    timeout={300}
    classNames="border-"
    {...callBack}
  >
    <div className="border-2rem border-white h-screen">
      {children}
    </div>
  </CSSTransition>
);

export default function Home() {
  const [loaded, setLoaded] = React.useState(false);

  function play() {
    pc.app.start();
    setLoaded(true);
  }

  function setProgress(value) {
    console.log("!!");
  }

  const [mount, setMount] = useState(false);
  const [mount2, setMount2] = useState(true);

  const changer = () => {
    setMount(!mount);
  };

  const changer2 = () => {
    setMount2(!mount2);
  };

  const callBacks = {
    onEntered: changer2,
  };

  const callBacks2 = {
    onExited: play
  };

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' />
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <link rel="manifest" href="manifest.json" />
        <title>virclay</title>
        <script src="playcanvas-stable.min.js"></script>
        <script src="__settings__.js"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!loaded && (
        <BORDER show={mount2} {...callBacks2}>
          <div id="app" className="bg-header flex flex-col items-start p-0 h-full">
            <Transition in={mount} timeout={550} {...callBacks}>
              {state => (
                <div className="test relative bg-white opacity-90 md:opacity-100 font-sans text-left p-4 left-0 flex-grow" style={SLIDE_STYLE[state]}>

                  <div className="title">
                    <h1 className="text-7xl">
                      WEBVR
                    </h1>
                    <h1 className="text-7xl">
                      SHOWROOM
                    </h1>
                  </div>

                  <div className="description my-8">
                    <p className="text-xl my-1">
                      デモルームにようこそ
                    </p>
                    <p className="text-xl my-1">
                      このデモはWebGLで作られています
                    </p>
                    <p className="text-sm font-black my-1">
                      <a>詳細はこちら</a>
                    </p>
                  </div>

                  <div className="warning flex flex-row items-end">
                    <img src="images/missing-headset.png" className="h-9" />
                    <div className="text-xs mx-2">
                      このブラウザはWebVRをサポートしていません。<br />
                      VRモードで入室はできません。
                    </div>
                  </div>

                  <button id="progress-bar1" onClick={changer} className="bg-white bg-yellow-300 hover:bg-gray-100 text-gray-800 my-8 py-2 px-10 border-gray-400 text-xl">
                    スペースに入室する
                  </button>

                  <div className="absolute text-sm bottom-0">
                    <div className="flex flex-row my-6">
                      <button onClick={() => console.log("TwitterButtonClick")}>
                        <img src="images/twitter.png" className="mx-2 h-7" />
                      </button>
                      <button onClick={() => console.log("FacebookButtonClick")}>
                        <img src="images/facebook.png" className="mx-2 h-7" />
                      </button>
                    </div>
                    <p>
                      Copyright © LASTMILE WORKS Co., Ltd. All rigths reserved.
                    </p>
                  </div>
                </div>
              )}
            </Transition>
          </div>
        </BORDER>
      )}

      <script src="__modules__.js" />
      <script type="module" src="__start__.js" />
      <script type="module" src="__loading__.js" />
    </>
  )
}
