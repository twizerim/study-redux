
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/footer";
import { describe, test } from "node:test";
import "@testing-library/jest-dom";


describe("show test of footer pragraph",()=>{
    render (<Footer/>)
})

it("render footer pragraph",()=>{
    const pElement=screen.getByRole("search")
    expect(pElement).toHaveValue("footer")
})