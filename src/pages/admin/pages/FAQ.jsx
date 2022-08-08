import { useState } from "react";
import { WrapperHeader } from "../components/WrapperHeader";

import add from "../assets/add.svg";
import close from "../assets/close.svg";
import open from "../assets/open.svg";

export const FAQ = () => {
  const [showForm, setShowForm] = useState(false);
  const [faq, setFaq] = useState([
    {
      title: "How do I create an account?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nunc faucibus nunc magna vivamus. Adipiscing accumsan morbi interdum aliquet mattis. Iaculis faucibus in quisque fringilla in tincidunt dictumst in. Aliquam id nec nulla diam orci, turpis vestibulum id. Sapien, laoreet pellentesque etiam sed vel quam. Pulvinar fringilla feugiat et risus vitae volutpat. Blandit adipiscing dictum sed tempus eget elit tristique. Et a tellus malesuada ullamcorper pellentesque velit, in. Neque, mus id non facilisis ultricies. Libero auctor est odio aenean. Diam quam viverra ornare non purus orci. Duis commodo sed consectetur quisque.",
      icon: close,
    },
    {
      title: "How do I create an account?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nunc faucibus nunc magna vivamus. Adipiscing accumsan morbi interdum aliquet mattis. Iaculis faucibus in quisque fringilla in tincidunt dictumst in. Aliquam id nec nulla diam orci, turpis vestibulum id. Sapien, laoreet pellentesque etiam sed vel quam. Pulvinar fringilla feugiat et risus vitae volutpat. Blandit adipiscing dictum sed tempus eget elit tristique. Et a tellus malesuada ullamcorper pellentesque velit, in. Neque, mus id non facilisis ultricies. Libero auctor est odio aenean. Diam quam viverra ornare non purus orci. Duis commodo sed consectetur quisque.",
      icon: close,
    },
    {
      title: "How do I create an account?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nunc faucibus nunc magna vivamus. Adipiscing accumsan morbi interdum aliquet mattis. Iaculis faucibus in quisque fringilla in tincidunt dictumst in. Aliquam id nec nulla diam orci, turpis vestibulum id. Sapien, laoreet pellentesque etiam sed vel quam. Pulvinar fringilla feugiat et risus vitae volutpat. Blandit adipiscing dictum sed tempus eget elit tristique. Et a tellus malesuada ullamcorper pellentesque velit, in. Neque, mus id non facilisis ultricies. Libero auctor est odio aenean. Diam quam viverra ornare non purus orci. Duis commodo sed consectetur quisque.",
      icon: close,
    },
    {
      title: "How do I create an account?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nunc faucibus nunc magna vivamus. Adipiscing accumsan morbi interdum aliquet mattis. Iaculis faucibus in quisque fringilla in tincidunt dictumst in. Aliquam id nec nulla diam orci, turpis vestibulum id. Sapien, laoreet pellentesque etiam sed vel quam. Pulvinar fringilla feugiat et risus vitae volutpat. Blandit adipiscing dictum sed tempus eget elit tristique. Et a tellus malesuada ullamcorper pellentesque velit, in. Neque, mus id non facilisis ultricies. Libero auctor est odio aenean. Diam quam viverra ornare non purus orci. Duis commodo sed consectetur quisque.",
      icon: close,
    },
    {
      title: "How do I create an account?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nunc faucibus nunc magna vivamus. Adipiscing accumsan morbi interdum aliquet mattis. Iaculis faucibus in quisque fringilla in tincidunt dictumst in. Aliquam id nec nulla diam orci, turpis vestibulum id. Sapien, laoreet pellentesque etiam sed vel quam. Pulvinar fringilla feugiat et risus vitae volutpat. Blandit adipiscing dictum sed tempus eget elit tristique. Et a tellus malesuada ullamcorper pellentesque velit, in. Neque, mus id non facilisis ultricies. Libero auctor est odio aenean. Diam quam viverra ornare non purus orci. Duis commodo sed consectetur quisque.",
      icon: close,
    },
    {
      title: "How do I create an account?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nunc faucibus nunc magna vivamus. Adipiscing accumsan morbi interdum aliquet mattis. Iaculis faucibus in quisque fringilla in tincidunt dictumst in. Aliquam id nec nulla diam orci, turpis vestibulum id. Sapien, laoreet pellentesque etiam sed vel quam. Pulvinar fringilla feugiat et risus vitae volutpat. Blandit adipiscing dictum sed tempus eget elit tristique. Et a tellus malesuada ullamcorper pellentesque velit, in. Neque, mus id non facilisis ultricies. Libero auctor est odio aenean. Diam quam viverra ornare non purus orci. Duis commodo sed consectetur quisque.",
      icon: close,
    },
    {
      title: "How do I create an account?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nunc faucibus nunc magna vivamus. Adipiscing accumsan morbi interdum aliquet mattis. Iaculis faucibus in quisque fringilla in tincidunt dictumst in. Aliquam id nec nulla diam orci, turpis vestibulum id. Sapien, laoreet pellentesque etiam sed vel quam. Pulvinar fringilla feugiat et risus vitae volutpat. Blandit adipiscing dictum sed tempus eget elit tristique. Et a tellus malesuada ullamcorper pellentesque velit, in. Neque, mus id non facilisis ultricies. Libero auctor est odio aenean. Diam quam viverra ornare non purus orci. Duis commodo sed consectetur quisque.",
      icon: close,
    },
    {
      title: "How do I create an account?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nunc faucibus nunc magna vivamus. Adipiscing accumsan morbi interdum aliquet mattis. Iaculis faucibus in quisque fringilla in tincidunt dictumst in. Aliquam id nec nulla diam orci, turpis vestibulum id. Sapien, laoreet pellentesque etiam sed vel quam. Pulvinar fringilla feugiat et risus vitae volutpat. Blandit adipiscing dictum sed tempus eget elit tristique. Et a tellus malesuada ullamcorper pellentesque velit, in. Neque, mus id non facilisis ultricies. Libero auctor est odio aenean. Diam quam viverra ornare non purus orci. Duis commodo sed consectetur quisque.",
      icon: close,
    },
    {
      title: "How do I create an account?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nunc faucibus nunc magna vivamus. Adipiscing accumsan morbi interdum aliquet mattis. Iaculis faucibus in quisque fringilla in tincidunt dictumst in. Aliquam id nec nulla diam orci, turpis vestibulum id. Sapien, laoreet pellentesque etiam sed vel quam. Pulvinar fringilla feugiat et risus vitae volutpat. Blandit adipiscing dictum sed tempus eget elit tristique. Et a tellus malesuada ullamcorper pellentesque velit, in. Neque, mus id non facilisis ultricies. Libero auctor est odio aenean. Diam quam viverra ornare non purus orci. Duis commodo sed consectetur quisque.",
      icon: close,
    },
  ]);

  const handleClick = (index) => {
    const newFaq = faq.map((faq, faqIndex) => {
      if (index !== faqIndex) {
        faq.icon = close;
        return faq;
      }

      if (faq.icon === close) {
        faq.icon = open;
        return faq;
      }

      faq.icon = close;
      return faq;
    });

    setFaq(newFaq);
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "30px",
        paddingBottom: "41px",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <WrapperHeader title="FAQ" />
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "9px",
            background: "#02378B",
            borderRadius: "19px",
            fontSize: "10px",
            fontWeight: "700",
            lineHeight: "24px",
            color: "#fff",
            padding: "1px 20px",
            marginRight: "20px",
          }}
        >
          <img src={add} alt="add icon" />
          <span> ADD FAQ</span>
        </button>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "26px 36px",
            background: "#F5F5F5",
            borderRadius: "48px",
            width: "440px",
            maxWidth: "90%",
            display: `${showForm ? "block" : "none"}`,
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "20px",
              color: "#000",
              marginBottom: "44px",
              textAlign: "center",
            }}
          >
            ADD FAQ
          </div>
          <form style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "36px",
              }}
            >
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  color: "#000",
                  margin: "0 11px 5px",
                }}
              >
                Question
              </label>
              <input
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  color: "#000",
                  border: "1px solid #D9D9D9",
                  borderRadius: "22px",
                  padding: "13px 27px",
                  height: "44px",
                  outline: "none",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "44px",
              }}
            >
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  color: "#000",
                  margin: "0 11px 5px",
                }}
              >
                Answer
              </label>
              <textarea
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  color: "#000",
                  height: "170px",
                  border: "1px solid #D9D9D9",
                  borderRadius: "22px",
                  outline: "none",
                  padding: "20px 27px",
                }}
              ></textarea>
            </div>

            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  background: "#02378B",
                  borderRadius: "19px",
                  fontSize: "12px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  color: "#fff",
                  padding: "4px 36px",
                }}
              >
                POST
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        style={{
          flexGrow: "1",
          display: "flex",
          flexDirection: "column",
          gap: "23px",
          paddingInline: "80px",
        }}
      >
        {faq.map((faq, index) => (
          <div key={index}>
            <div
              onClick={() => handleClick(index)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                paddingBlock: "5px",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "18px",
                  color: "#000",
                  textAlign: "start",
                }}
              >
                {faq.title}
              </span>
              <img src={faq.icon} alt="icon" />
            </div>

            {faq.icon === open && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(10em, 1fr))",
                  gap: " 13px",
                  marginTop: "9px",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "#000",
                    marginBottom: "-18px",
                    paddingInline: "22px",
                  }}
                >
                  {faq.text}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
