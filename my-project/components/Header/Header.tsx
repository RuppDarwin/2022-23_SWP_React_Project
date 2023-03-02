import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="flex justify-evenly bg-[#C5D800] h-16 items-center">
        <p>Home</p>
        <p>Menü</p>
        <h1>Logo</h1>
        <p>Kontakt</p>
        <p>Log- / Sign In</p>
      </div>
    )
  }
}
