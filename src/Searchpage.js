import React from "react";
export default function searchpage(){
    return(
    <div className="rounded">

      <div class="input-group ">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
      
    </div>
    );
}