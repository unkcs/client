import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  font-family: "Inter", sans-serif;
  color: #f8f9fa;

  max-width: 748px;
  margin: 0 auto;

  @media screen and (max-height: 600px) {
    padding: 16px 0;
    overflow-y: auto;
  }

  @media screen and (max-width: 840px) {
    padding-top: 48px;
  }

  .head {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;

    h1 {
      font-size: 1em;
      font-weight: 500;
    }

    p {
      max-width: 440px;
      font-size: 0.75em;
      color: #767677;
    }
  }

  .row {
    max-width: 480px;
    width: 100%;
    display: flex;
    gap: 24px;

    .col {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }

    &.sizes .col:first-child,
    &.sizes .col:nth-child(2) {
      width: 100%;
    }

    &.options {
      max-width: 560px;
      .col {
        width: 100%;
      }
    }

    label {
      font-size: 0.625em;
      color: #676767;
      font-weight: 500;

      p {
        width: 100%;
        white-space: nowrap;
      }
    }

    &.slider {
      max-width: 320px;
      flex-direction: column;
      gap: 4px;
    }
  }

  & > h1 {
    margin: 16px 0 0;
    font-size: 0.875em;
  }
`;
