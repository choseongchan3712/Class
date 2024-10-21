import "./style.css";

const sites = [
    {
        id: 0,
        name: "유튜브",
        url: "https://www.youtube.com/?app=desktop&hl=ko&gl=KR",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/1200px-YouTube_social_white_square_%282017%29.svg.png",
    },
    {
        id: 1,
        name: "네이버",
        url:"https://www.naver.com/",
        img: "https://play-lh.googleusercontent.com/jYtnK__ibJh9emODIgTyjZdbKym1iAj4RfoVhQZcfbG-DuTSHR5moHVx9CQnqg1yoco9",
    },
    {
        id: 2,
        name: "구글",
        url:"https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwj_0s7P0p6JAxWzh68BHcsoMTYQPAgI",
        img: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
    },
];

export const SiteEx = () => {
    return (
        <div>
            {
                sites.map((siteList, index) => (
                    <div key={index} className="wrap">
                        <div className="name">
                            {siteList.name}
                        </div>
                        <a className="img" href = {siteList.url}>
                            <img src={siteList.img} alt="img" />
                        </a>
                    </div>
                ))
            }
        </div>
    );
};