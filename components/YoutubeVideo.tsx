
import React from "react";
import YouTube from "react-youtube";

export default function YoutubeVideo(){
        const opts = {
            height: "390",
            width: "640",
            playerVars: {
                autoplay: 1,
            },
        };

        return (
            <div>
                <h3>GeeksforGeeks - Youtube</h3>
                <YouTube videoId="5VR4mavFgg8"/>
                
            </div>
        );
    }

    // _onReady(event) {
    //     event.target.pauseVideo();
    // }

