import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  id?: string;
  categories: string[];
  mainTitle?: string;
  subTitle?: string;
  variant?: 'default' | 'mini';
  themeColor?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  image,
  id = "01",
  categories,
  mainTitle = "digital decoy",
  subTitle = "mitarbeiterkarte",
  variant = 'default',
  themeColor = '#f13d2b'
}) => {
  return (
    <div 
      className={`profile-card-container ${variant}`}
      style={{ '--theme-color': themeColor } as React.CSSProperties}
    >
      <div className="profile-card-inner">
        {/* Background 'X' */}
        <div className="profile-card-x-bg">X</div>

        {/* Header Text */}
        <div className="profile-card-header">
          <div className="profile-card-main-title">{mainTitle}</div>
          <div className="profile-card-subtitle">{subTitle}</div>
        </div>

        {/* Profile Image Section */}
        <div className="profile-card-image-section">
          <div className="profile-card-image-box">
            <img src={image} alt={name} className="profile-card-photo" />
          </div>
        </div>

        {/* Name and Role Section */}
        <div className="profile-card-footer">
          <h2 className="profile-card-name">{name}</h2>
          <div className="profile-card-role-line">
            <span className="profile-card-role">{role}</span>
            <span className="profile-card-id">{id}</span>
          </div>
          <div className="profile-card-decorative-lines">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
          </div>
        </div>

        {/* Categories / Roles list on the right */}
        <div className="profile-card-categories">
          {categories.slice(0, variant === 'mini' ? 4 : categories.length).map((cat, index) => (
            <div key={index} className="profile-card-category-item">{cat}</div>
          ))}
        </div>

        {/* Barcode Section */}
        <div className="profile-card-barcode-section">
          <div className="profile-card-barcode-text">eTX: 1184A6.2/54/0*22%   625.4.3.004.0*</div>
          <div className="profile-card-barcode">
            <div className="barcode-stripe s1"></div>
            <div className="barcode-stripe s2"></div>
            <div className="barcode-stripe s3"></div>
            <div className="barcode-stripe s4"></div>
            <div className="barcode-stripe s5"></div>
            <div className="barcode-stripe s6"></div>
            <div className="barcode-stripe s7"></div>
            <div className="barcode-stripe s8"></div>
            <div className="barcode-stripe s1"></div>
            <div className="barcode-stripe s4"></div>
            <div className="barcode-stripe s2"></div>
            <div className="barcode-stripe s6"></div>
            <div className="barcode-stripe s3"></div>
            <div className="barcode-stripe s7"></div>
            <div className="barcode-stripe s5"></div>
            <div className="barcode-stripe s8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
