import styled from "styled-components";

export const Container = styled.div`
  height: 96%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 24px;
  padding: 0 32px;
  overflow-y: auto;
  position: relative;

  * {
    transition: 0.2s ease;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #72767d;
    font-size: 0.75em;
    font-family: "Poppins", sans-serif;

    p {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }

  .main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  .post {
    max-width: 780px;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    .post--title {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #f8f9fa;
      font-family: "Poppins", sans-serif;
      font-size: 1.25em;
      font-weight: 600;
    }

    .post--image {
      width: 100%;
    }

    .post--desc {
      width: 90%;
      font-size: 0.875em;
      color: #767677;
      font-family: "Roboto", sans-serif;
      user-select: text;
    }

    .post--button {
      width: auto;

      .box {
        padding: 8px 0;
        height: auto;
        background: rgba(93, 98, 105, 0.5);
      }

      button {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 4px;
        font-size: 0.875em;
      }
    }
  }

  .sidebar {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;

    .avatar {
      display: flex;
      width: 48px;
      border: 4px solid #212529;
      border-radius: 50%;
      position: relative;

      span {
        width: 16px;
        aspect-ratio: 1;
        position: absolute;
        bottom: -2px;
        right: -2px;
        border-radius: 50%;
        border: 4px solid #212529;
      }

      img {
        width: 100%;
        aspect-ratio: 1;
      }
    }

    nav {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;

      .line {
        width: 18px;
        height: 2px;
        background: #f8f9fa;
      }

      button {
        transition: 0.2s ease;

        svg {
          color: #f8f9fa;
          transition: 0.2s ease;
        }
      }

      button:hover {
        transform: scale(1.45);

        .icon--settings {
          color: #6c757d;
        }

        .icon--link {
          color: #219ebc;
        }

        .icon--twitter {
          color: #00acee;
        }

        .icon--insta {
          color: #d62976;
        }

        .icon--youtube {
          color: #ff0000;
        }

        .icon--discord {
          color: #5865f2;
        }
      }
    }
  }

  .download {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .downloadBar {
    margin-top: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 4px;

    .downloadBar--percent {
      color: #f8f9fa;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      font-size: 0.75em;
      align-self: flex-start;
    }

    .downloadBar--bar {
      width: 100%;
      height: 4px;
      background: #323538;
      border-radius: 2px;
    }

    .downloadBar--status {
      font-family: "Inter", sans-serif;
      align-self: flex-end;
      color: #767677;
      font-size: 0.75em;
      font-weight: 500;
    }
  }

  .download--action {
    width: auto;
    min-width: 120px;

    .box {
      border-radius: 8px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
  }

  #footer {
    position: static;

    a {
      padding: 4px 8px;
    }
  }

  @media screen and (max-width: 768px) {
    .post {
      width: 90%;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 0 16px;
    .post {
      width: 100%;

      .post--desc {
        width: 100%;
      }
    }

    .sidebar {
      position: absolute;
      top: 8px;
      right: 8px;

      &:hover nav {
        display: flex;
      }

      nav {
        display: none;
        padding: 8px;
        background: #212529;
        border-radius: 4px;
      }
    }
  }
`;
