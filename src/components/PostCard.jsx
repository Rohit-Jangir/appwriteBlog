import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full">
        <div className="h-[300px] flex-shrink-0 overflow-hidden mb-3 group relative">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full block object-cover transition-transform duration-[600ms] ease-in-out hover:scale-110"
          />
          <span class="ripple absolute inset-0 rounded-lg pointer-events-none"></span>
        </div>
        <div>
          <h2 className="text-xl font-bold text-black uppercase mb-2">{title}</h2>
          <p className="text-xs text-black line-clamp-3 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptate eaque corporis voluptatem. Hic, ullam minima. Possimus eos saepe, corporis incidunt ipsa sit voluptates dicta voluptatem distinctio necessitatibus soluta quibusdam hic illo laboriosam ex aut doloremque. Blanditiis eveniet perspiciatis odio unde est quibusdam exercitationem nesciunt, voluptas molestias quia, asperiores consectetur?
          </p>
          <p className="text-[10px] text-black uppercase">continue Reading &rarr;</p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
