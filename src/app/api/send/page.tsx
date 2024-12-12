import { NextResponse } from "next/server";

export default async function Get() {
    try {
      return NextResponse.json({ 'hello': 'world'});
    } catch (error) {
        return NextResponse.json({error});
    }
}