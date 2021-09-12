import React from "react";
import GENRE_DATA from "../../genreData";
import Genre from "../Genre/Genre";
import "./SideBar.css";

const genreData = [
    {
        genreImg: "/image/action_genre.jpg",
        genre: "Action",
    },
    {
        genreImg: "/image/genre_rpg.png",
        genre: "RPG",
    },
    {
        genreImg: "/image/genre_sports.png",
        genre: "Sports",
    },
    {
        genreImg: "/image/genre_racing.png",
        genre: "Racing",
    },
    {
        genreImg: "/image/genre_strategy.png",
        genre: "Strategy",
    },
];

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genreChoice: "",
        };
    }

    callbackHandler = (selectedGenre) => {
        const { handler } = this.props;
        this.setState(
            {
                genreChoice: selectedGenre,
            },
            () => {
                const { genreChoice } = this.state;
                const genreData = GENRE_DATA[genreChoice];
                handler(genreData);
            }
        );
    };

    render() {
        return (
            <div className="sidebar-wrapper">
                <div className="sidebar-non-footer">
                    <p className="sidebar-heading">Genres</p>
                    <ul className="sidebar-items-wrapper">
                        {genreData.map((genreItem) => {
                            const { genreImg, genre } = genreItem;
                            return (
                                <Genre
                                    genreImg={genreImg}
                                    genre={genre}
                                    handler={this.callbackHandler}
                                />
                            );
                        })}
                    </ul>
                </div>
                <div className="sidebar-footer">
                    <p className="footer-text">Made with 💗 by Suryaraj</p>
                    <div className="footer-social-wrapper">
                        <a
                            className="footer-social"
                            href="https://twitter.com/BhaduriSuryaraj"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                                alt="Twitter"
                            />
                        </a>
                        <a
                            className="footer-social"
                            href="https://github.com/suryaraj1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="Github"
                            />
                        </a>
                        <a
                            className="footer-social"
                            href="https://www.linkedin.com/in/suryaraj-bhaduri-a6706b162/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                alt="Linkedin"
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;
