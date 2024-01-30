import React from "react";
import { useState } from "react";
import { FaBars, FaTelegram, FaTwitter, FaTwitterSquare } from "react-icons/fa";

const Chinese = () => {
  const [questions, setQuestions] = useState(
    "Do You Support The Great Chinese Community Party?"
  );
  const [answers, setAnswers] = useState("Yes");
  const [ans, setAns] = useState("No");
  const [res, setRes] = useState("");
  const [red, setRed] = useState("red");
  const [hidden, setHidden] = useState("hidden");
  const [fail, setFail] = useState("fail");
  let wonaudio = new Audio("/bingchilling.mp3");
  let lossaudio = new Audio("/danger.mp3");
  let startaudio = new Audio("/AUD-20240127-WA0052.mp3");

  const submit = (e) => {
    if (answers == "Yes") {
      setRes("You are Welcome !!!");
      startaudio.play();
      setTimeout(() => {
        setQuestions("Which country is the greatest?");
        setRes("");
        setRed("red");
        setAns("2.America");
        setAnswers("1.China");
      }, 3000);
    }
    if (answers == "1.China") {
      setRes("+1 社会信用 !!!");
      wonaudio.play();
      setHidden("show");
      setTimeout(() => {
        setQuestions("Who is the ruler of china?");
        setRes("");
        setRed("red");
        wonaudio.pause();
        setHidden("hidden");
        setAns("2.Xi Jinping");
        setAnswers("1.Sam Lu");
      }, 3000);
    }
    if (answers == "1. less than 3 hours") {
      setRes("+1 社会信用 !!!");
      wonaudio.play();
      setHidden("show");
      setTimeout(() => {
        setQuestions("What happened June, 1989 at Tiananmem Square?");
        setRes("");
        setRed("red");
        wonaudio.pause();
        setHidden("hidden");
        setAns("2. Something");
        setAnswers("1. Nothing");
      }, 3000);
    }

    if (answers == "1. Nothing") {
      setRes("+1 社会信用 !!!");
      wonaudio.play();
      setHidden("show");
      setTimeout(() => {
        setQuestions("Congratulation you passed all questions..");
        setRes("You Earned 500 points");
        setRed("red");
        wonaudio.pause();
        setHidden("hidden");
        setAns("");
        setAnswers("");
      }, 3000);
    }

    if (answers == "1.Sam Lu") {
      setRed("blue");
      lossaudio.play();
      setFail("screen");
      setRes("Wrong Answer !!!");
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }
    if (answers == "1.Yes") {
      setRed("blue");
      setFail("screen");
      lossaudio.play();
      setRes("Wrong Answer !!!");
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }
  };
  const push = () => {
    if (ans == "No") {
      setRes("bye !!!");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }

    if (ans == "2.America") {
      setRes("Wrong Answer !!!");
      lossaudio.play();
      setFail("screen");
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }
    if (ans == "2. Something") {
      setRes("Wrong Answer !!!");
      lossaudio.play();
      setFail("screen");
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }

    if (ans == "2.Xi Jinping") {
      setRed("red");
      wonaudio.play();
      setHidden("show");
      setRes("+1 社会信用 !!!");
      setTimeout(() => {
        wonaudio.pause();
        setQuestions("Did something happen in Tianem Square?");
        setRes("");
        setHidden("hidden");
        setAns("2.No");
        setAnswers("1.Yes");
      }, 3000);
    }

    if (ans == "2.No") {
      setRed("red");
      wonaudio.play();
      setHidden("show");
      setRes("+1 社会信用 !!!");
      setTimeout(() => {
        wonaudio.pause();
        setQuestions("How many hours of video game should be played a week?");
        setRes("");
        setHidden("hidden");
        setAns("2. 30 hours");
        setAnswers("1. less than 3 hours");
      }, 3000);
    }
    if (ans == "2. 30 hours") {
      setRes("Wrong Answer !!!");
      lossaudio.play();
      setFail("screen");
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }
  };

  return (
    <div className="bg-[#FC0000]">
      <nav className="px-5 py-5 flex justify-between bg-red-500 text-gray-100">
        <p className="text-sm font-bold">The Great Chinese Community</p>
        <FaBars />
      </nav>

      <div className=" w-full bg-[#FC0000] mt-10 md:flex h-scrn items-center">
        <audio src="/AUD-20240127-WA0052.mp3"></audio>
        <div>
          <img src="/china.gif" alt="" className="w-[100%]" />
        </div>

        <div className="p-4 md:w-[50%] w-full">
          <section className="md:w-[90%] md:mt-10 bg-[#87B456] p-5 text-center md:ml-16 rounded-lg font-bold">
            <p className="px-10">{questions}</p>
            <p className="mt-10 text-2xl ">{res}</p>
            <div className={hidden}>
              <img src="/green.gif" alt="" />
            </div>
            <div className={fail}>
              <img src="/red.gif" alt="" />
            </div>
            <div className="mt-10 w-full flex gap-2">
              <button className={red} onClick={submit}>
                {answers}
              </button>
              <button className="bg-red-700 w-[50%] p-2" onClick={push}>
                {ans}
              </button>
            </div>
          </section>
          <div className="md:ml-16 mt-2 md:mt-5">
            <p className="text-lg folt-semibold underline">
              Contract adderss:{" "}
            </p>
            <div className="pt-2 flex gap-2 md:gap-5">
              <FaTelegram className="md:text-5xl text-2xl" />
              <FaTwitterSquare className="md:text-5xl text-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 bg-[#FC0000] gap-3 p-2 pt-5 md:pt-10">
        <div>
          <img src="/red.gif" alt="" className="" />
        </div>
        <div>
          <img src="/green.gif" alt="" className="" />
        </div>
        <div>
          <img src="/flag.gif" alt="" className="w-[100%]" />
        </div>
        <div>{/* <img src="/china.gif" alt="" className="w-[100%]" /> */}</div>
      </div>
    </div>
  );
};

export default Chinese;
