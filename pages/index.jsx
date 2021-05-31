import React, { useState } from 'react';
import Head from 'next/head'
import { Transition, CSSTransition } from 'react-transition-group';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share'

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
    <div className="border-space border-white h-screen">
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
          <div id="app" className="bg-header flex flex-col items-start h-full">
            <Transition in={mount} timeout={500} {...callBacks}>
              {state => (
                <div className="relative bg-white opacity-100 font-sans text-left p-4 flex-grow space-y-6" style={SLIDE_STYLE[state]}>

                  <div className="title text-7xl">
                    <h1>
                      WEBVR
                    </h1>
                    <h1>
                      SHOWROOM
                    </h1>
                  </div>

                  <div className="description space-y-1">
                    <p className="text-xl">
                      デモルームにようこそ
                    </p>
                    <p className="text-xl">
                      このデモはWebGLで作られています
                    </p>
                    <p className="text-sm font-black">
                      <a>詳細はこちら</a>
                    </p>
                  </div>

                  <div className="flex flex-row items-end space-x-2">
                    <img src="images/missing-headset.png" className="h-10" />
                    <div className="text-xs">
                      このブラウザはWebVRをサポートしていません。<br />
                      VRモードで入室はできません。
                    </div>
                  </div>

                  <button id="progress-bar1" onClick={changer} className="bg-white bg-yellow-300 hover:bg-yellow-200 text-gray-800 py-2 px-10 text-xl">
                    スペースに入室する
                  </button>

                  <div className="absolute text-sm bottom-0 space-y-6">
                    <div className="flex flex-row space-x-2">
                      <TwitterShareButton url="https://google.com">
                        <TwitterIcon size="32" round />
                      </TwitterShareButton>
                      <FacebookShareButton url="https://google.com">
                        <FacebookIcon size="32" round />
                      </FacebookShareButton>
                    </div>
                    <p>
                      Copyright © XXX Co., Ltd. All rigths reserved.
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
