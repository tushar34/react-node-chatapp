import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: "-1px",
      left: "-1px",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="userchat">
        <div className="current-user">
          <div className="current-user-profile">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </StyledBadge>
          </div>
          <div>
            <span className="current-user-name">testtttttt</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>

        <div className="user">
          <div className="profile">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
          </div>
          <div className="username">
            <span>Tushar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
