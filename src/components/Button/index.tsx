import { Container } from "./styles";
import { CircularProgress } from "@mui/material";
import { HtmlHTMLAttributes } from "react";

type ButtonProps = {
  loading?: boolean;
  active?: boolean;
  onClick?: any;
  disabled?: boolean;
};

export const Button = ({
  loading = false,
  active = false,
  onClick,
  disabled,
  ...rest
}: ButtonProps & HtmlHTMLAttributes<HTMLInputElement>) => {
  return (
    <Container className={rest.className}>
      <div className={`box ${active && "active"}`}>
        <button onClick={onClick} type="submit" disabled={disabled}>
          {loading ? (
            <CircularProgress size={20} sx={{ color: "white" }} />
          ) : (
            rest.children
          )}
        </button>
      </div>
    </Container>
  );
};
