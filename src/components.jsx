import styled from "styled-components";
import { colors } from "./config.jsx";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

export const ContentContainer = styled.div`
    width: 90%;
    height: 40rem;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    overflow: hidden;
    backdrop-filter: blur(8px);
    z-index: 1000;
    box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;

    @media screen and (max-width: 500px) {
        height: 60%;
    }

    @media screen and (max-width: 768px) {
        width: 95%;
        height: 90%;
        padding: 3rem 0;
    }
    @media screen and (max-width: 1050px) {
        width: 93%;
        height: 70%;
    }
`;
export const Logo = styled.img`
    height: 2rem;
    width: max-content;
    object-fit: contain;
    @media screen and (max-width: 780px) {
        height: 1.5rem;
    }
    @media screen and (max-width: 600px) {
        height: 1.2rem;
    }
`;

export const FormHeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 2rem 0 1rem 0;
`;
export const HeadingLarge = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    color: ${colors.dark};
    @media screen and (max-width: 780px) {
        font-size: 1.4rem;
    }
    @media screen and (max-width: 600px) {
        font-size: 1.2rem;
    }
`;
export const Paragraph = styled.p`
    font-size: 1rem;
    width: ${(props) => (props.width ? props.width : "unset")};
    text-align: ${(props) => (props.align ? props.align : "unset")};
    color: ${colors.smallText};
    @media screen and (max-width: 600px) {
        font-size: 0.7rem;
    }
    @media screen and (max-width: 780px) {
        font-size: 0.8rem;
    }
    @media screen and (max-width: 1080px) {
        font-size: 0.9rem;
    }
`;
export const FormContainer = styled.div`
    flex: 1;
    border-right: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    @media screen and (max-width: 768px) {
        border-right: none;
        gap: 1rem;
    }
`;
export const Form = styled.form`
    height: max-content;
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    @media screen and (max-width: 768px) {
        width: 85%;
        gap: 0.8rem;
    }
    @media screen and (max-width: 1060px) {
        width: 80%;
    }
`;
export const InputContainer = styled.div`
    width: 100%;
    position: relative;
    height: max-content;
    & input:not(:placeholder-shown) + label,
    & input:focus + label {
        top: -0.5rem;
        left: 0.5rem;
        font-size: 0.9rem;
        background-color: white;
        padding: 0 0.4rem;
        transform: translateY(0);
        color: ${colors.primary};
        font-weight: 550;
    }
    & input:not(:focus):valid + label {
        color: ${colors.textColor};
    }
    @media screen and (max-width: 600px) {
        & input:not(:placeholder-shown) + label,
        & input:focus + label {
            font-size: 0.8rem;
            padding: 0 0.3rem;
        }
    }
`;
export const Input = styled.input`
    height: 100%;
    width: 100%;
    border: none;
    padding-left: 8px;
    height: 3.2rem;
    border: 1px solid ${colors.borderColor};
    border-radius: 0.5rem;
    background: transparent;
    &:focus {
        border-color: ${colors.primary};
    }

    @media screen and (max-width: 780px) {
        height: 2.7rem;
    }
`;

export const Button = styled.button`
    height: 3.2rem;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    background: ${colors.primaryLight};
    color: white;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    margin-top: 0.5rem;
    &:hover {
        background: ${colors.primary};
    }

    @media screen and (max-width: 780px) {
        height: 2.7rem;
    }
`;
export const Label = styled.label`
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    background: transparent;
    font-size: 1rem;
    pointer-events: none;
    @media screen and (max-width: 600px) {
        font-size: 0.9rem;
    }
`;

export const FormOptionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media screen and (max-width: 600px) {
        gap: 0.3rem;
    }
`;

export const CheckBox = styled.input`
    height: 1.2rem;
    width: 1.2rem;
    background: transparent;
    &:checked {
        background: ${colors.primary};
    }
    border: 1px solid ${colors.borderColor};
    border-radius: 0.2rem;

    @media screen and (max-width: 780px) {
        height: 0.9rem;
        width: 0.9rem;
    }
`;
export const FormBottomContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: relative;
    @media screen and (max-width: 780px) {
        margin-top: 1.5rem;
        gap: 1rem;
    }
`;
export const SingnInText = styled.p`
    font-size: 0.9rem;
    color: ${colors.smallText};
    position: absolute;
    top: -0.45rem;
    background: white;
    padding: 0 0.5rem;
    @media screen and (max-width: 780px) {
        font-size: 0.7rem;
    }
`;
export const Line = styled.hr`
    border: none;
    height: 0.05rem;
    width: 100%;
    background-color: #ccc;
    background-image: linear-gradient(to right, #fff, #888, #fff);
`;
export const ButtonContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;
`;
export const SingInButtons = styled.div`
    height: 2.3rem;
    width: 2.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${colors.borderColor};
    cursor: pointer;
    font-size: 1.2rem;
    &:hover {
        background: ${(props) =>
            props.color ? props.color : colors.textColor};
        border-color: ${(props) =>
            props.color ? props.color : colors.textColor};
        color: #fff;
    }
    @media screen and (max-width: 780px) {
        height: 1.8rem;
        width: 1.8rem;
        background: ${(props) =>
            props.color ? props.color : colors.textColor};
        border-color: ${(props) =>
            props.color ? props.color : colors.textColor};
        color: #fff;
        font-size: 1rem;
    }
`;

export const Span = styled.span`
    font-size: 1rem;
    color: ${colors.textColor};
    @media screen and (max-width: 780px) {
        font-size: 0.7rem;
    }
`;

export const CreateAccountText = styled.span`
    font-size: 1rem;
    font-weight: ${(props) => (props.weight ? props.weight : 400)};
    color: ${(props) => (props.color ? props.color : colors.textColor)};
    margin: ${(props) => (props.margin ? props.margin : "0")};
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        color: ${colors.primary};
    }
    @media screen and (max-width: 780px) {
        font-size: 0.8rem;
    }
`;
export const ForgotPasswordOption = styled.span`
    font-size: 1rem;
    font-weight: 550;
    color: ${colors.primaryLight};
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        color: ${colors.primary};
    }
    @media screen and (max-width: 780px) {
        font-size: 0.7rem;
    }
`;
export const Bubble = styled.div`
    position: absolute;
    ${(props) =>
        props.position === "top"
            ? `
        top: 0;
        right: 0;
        clip-path: ellipse(38% 33% at 97% 19%);
        height: 30rem;
        width: 30rem;
        `
            : props.position === "bottom"
            ? `
        bottom: 0;
        left: 0;
        clip-path: ellipse(43% 38% at 21% 94%);
        height: 40rem;
        width: 40rem;
        `
            : "unset"}
    background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
    background: linear-gradient(to right, #2f80ed, #56ccf2);
    background: #56ccf2;

    @media screen and (max-width: 768px) {
        ${(props) =>
            props.position === "top"
                ? `
            height: 25rem;
            width: 25rem;
            `
                : props.position === "bottom"
                ? `
            height: 30rem;
            width: 30rem;
            `
                : ``}
    }
    @media screen and (max-width: 476px) {
        ${(props) =>
            props.position === "top"
                ? `
            height: 23rem;
            width: 23rem;
            `
                : props.position === "bottom"
                ? `
            height: 28rem;
            width: 28rem;
            `
                : ``}
    }
    @media screen and (max-width: 380px) {
        ${(props) =>
            props.position === "top"
                ? `
            height: 20rem;
            width: 20rem;
            `
                : props.position === "bottom"
                ? `
            height: 25rem;
            width: 25rem;
            `
                : ``}
    }
`;

export const LeftContentContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    @media screen and (max-width: 685px) {
        display: none;
    }
`;

export const Image = styled.img`
    height: 60%;
    width: max-content;
    object-fit: cover;
    @media screen and (max-width: 780px) {
        height: 42%;
    }
    @media screen and (max-width: 1080px) {
        height: 50%;
    }
`;

export const HeadingMedium = styled.h2`
    font-size: 1.3rem;
    font-weight: 600;
    color: ${colors.dark};

    @media screen and (max-width: 1080px) {
        font-size: 1.1rem;
    }
`;
