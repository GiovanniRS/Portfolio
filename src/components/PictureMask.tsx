import picture from "../assets/picture.png"

export default function PictureMask() {
    return (
        <svg width="100%" height="100%" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">

            <mask id="hexagonMask">
                <rect width="200" height="200" x="-100" y="-100" fill="black" />
                <polygon points="86.6,0 43.3,-75 -43.3,-75 -86.6,0 -43.3,75 43.3,75" fill="white" />
            </mask>
            
            <image width="140" height="140" x="-70" y="-60" href={picture} mask="url(#hexagonMask)" />

            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#6803FA', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#F030A5', stopOpacity: 1 }} />
                </linearGradient>
            </defs>

            <polygon points="86.6,0 43.3,-75 -43.3,-75 -86.6,0 -43.3,75 43.3,75" fill="none" stroke="url(#grad1)" strokeWidth="2"/>
        </svg>
    )
}