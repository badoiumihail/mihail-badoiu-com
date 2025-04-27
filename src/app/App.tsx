import React from "react";
import { NavBar } from "../features/NavBar";
import { Button } from "../components/Button";

export default function App() {
    return (
        <React.Fragment>
            <NavBar className="items-center justify-between bg-green-50 p-4">
                <Button
                    onClick={() => {
                        console.log("test");
                    }}
                >
                    HOME
                </Button>
                <div className="flex space-x-6">
                    <a href="/">About</a>
                    <a href="/">Projects</a>
                    <a href="/">Blog</a>
                    <a href="/">Contact</a>
                    <button className="border-3 border-solid border-green-600 bg-green-100 px-2 py-1">
                        Theme
                    </button>
                </div>
            </NavBar>
        </React.Fragment>
    );
}
