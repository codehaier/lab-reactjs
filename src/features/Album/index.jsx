import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Thả Thính Là Phải Dính!",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/1/4/c/914cea6dff1e9d5072c2cf32be64e299.jpg",
    },
    {
      id: 2,
      name: "Nhạc Trẻ Gây Nghiện",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/f/f/7/aff77dc298a71e7ade06e9bf31360c26.jpg",
    },
    {
      id: 3,
      name: "Chill Cùng Rap Việt",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/2/f/5/82f55da7d8e87167d6edcf66013455aa.jpg",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
