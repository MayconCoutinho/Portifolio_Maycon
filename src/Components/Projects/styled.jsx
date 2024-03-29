import styled from "styled-components";

export const Container = styled.div`
  background-color: #ccc;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 15px;
  align-items: flex-start;
  padding: 5px 5%;
  padding-bottom: 120px;

  @media (max-width: 991px) {
    grid-template-columns: 1.5fr 1fr;
    padding: 10px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;
export const Titulo = styled.div`
  background-color: #ccc;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #333;
  font-size: 40px;
  text-align: center;
  padding: 40px;
`;
export const MainVideo = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;

  text-align: end;

  p {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-transform: none;
    text-align: start;
  }
  a {
    transition: transform 0.1s ease;
    margin-right: 20px;
    img {
      border-radius: 50px;
    }

    :hover {
      img {
        transform: scale(1.02);
        filter: invert(100%);
      }
    }
  }
  h1 {
    text-align: start;

    color: #333;
    font-size: 23px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  video {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 8px;
  }
`;
export const ListVideo = styled.div`
  background-color: #fff;
  border-radius: 5px;
  height: 540px;
  overflow-y: scroll;
  font-size: 8px;
  color: #333;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background-color: #ccc;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #666;
    border-radius: 50px;
  }
`;
export const VideoList = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: ${(props) =>
    props.variant === true ? "#006969" : "#f7f7f7"};
  color: ${(props) => (props.variant === true ? "#dfdfdf" : "#353535")};
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  :hover {
    background: ${(props) => (props.variant === true ? "#006969" : "#eee")};
  }

  video {
    width: 100px;
    border-radius: 5px;
  }
`;
export const TagButton = styled.img`
  border: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  margin-left: 10px;
  background-image: url(${(props) => props.variant});
  border-radius: 50px;
  filter: ${(props) => (props.variant === true ? "invert(100%)" : "none")};

  :hover {
    filter: invert(100%);
  }

  @media (max-width: 991px) {
    padding: 5px;
  }
`;
export const ContainerTagButtons = styled.div`
  background-color: #fff;
  padding: 10px 0 10px 0;
`;
export const SemVideos = styled.div`
  display: flex;
  height: 540px;
  text-align: center;
  align-items: center;
  justify-content: center;
  p {
    color: #666;
    font-weight: 600;
    text-transform: none;
  }
`;
