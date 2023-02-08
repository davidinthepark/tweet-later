import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';

function Header() {
    return (
        <div className="header">
            <h1 className="notes__title">
                <div className="header_icon">
                    <TwitterIcon
                        aria-hidden="true"
                        sx={{ fontSize: 33}}
                    ></TwitterIcon>
                </div>
                Tweet Later
            </h1>
        </div>
    );
}
export default Header;