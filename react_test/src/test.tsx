import { LinkButton } from "./components/link";
import "./App.css"

export const Test = () => {
    const title: string = "test";

    return (
        <div className="container">
            <h1>{title}</h1>
            <LinkButton text="ToAppボタン" link="/" />
        </div>
    );
}
