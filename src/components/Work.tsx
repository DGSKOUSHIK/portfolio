import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return;
      const container = document.querySelector(".work-container");
      if (!container) return;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box" key={0}>
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>AI-Powered Web Intelligence</h4>
                  <p>RAG Pipeline</p>
                </div>
              </div>
              <p className="work-desc">
                Engineered an end-to-end Python/RAG platform, designing the crawling, preprocessing, and retrieval pipeline to deliver accurate, context-aware answers.
              </p>
              <h4>Tools and features</h4>
              <p>Python, RAG Pipeline, Web Crawling, Preprocessing</p>
            </div>
            <WorkImage
              image="/images/rag_web_intel.jpg"
              alt="AI Web Intelligence Platform"
              link="https://github.com/dgskoushik"
            />
          </div>
          <div className="work-box" key={1}>
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Banana Leaf Disease Classification</h4>
                  <p>Deep Learning & Computer Vision</p>
                </div>
              </div>
              <p className="work-desc">
                Implemented and evaluated a CNN with spatial attention, achieving 97.5% test accuracy with Grad-CAM heatmaps and confusion matrix validation.
              </p>
              <h4>Tools and features</h4>
              <p>Python, Keras, CNN, Grad-CAM, ROC/AUC (97.5% Accuracy)</p>
            </div>
            <WorkImage
              image="/images/banana_leaf_disease.jpg"
              alt="Banana Leaf Disease Classification"
              link="https://github.com/dgskoushik"
            />
          </div>
          <div className="work-box" key={2}>
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Activation Functions Analysis</h4>
                  <p>Neural Networks</p>
                </div>
              </div>
              <p className="work-desc">
                Ran comparative analysis across 4 activation functions on MNIST; proposed hybrid neural network model achieving 97.63% test accuracy.
              </p>
              <h4>Tools and features</h4>
              <p>Python, Neural Networks, MNIST (97.63% Accuracy)</p>
            </div>
            <WorkImage
              image="/images/activation_analysis.jpg"
              alt="Activation Functions Analysis"
              link="https://github.com/dgskoushik"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
