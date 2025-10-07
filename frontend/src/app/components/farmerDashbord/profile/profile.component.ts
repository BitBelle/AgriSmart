import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  userName: String = 'John Doe';
  userEmail: String = 'johny@mail.com';
  userLocation: String = 'Nairobi';
  userImage: String = 'assets/user-placeholder.png';

  activeCrops: string = 'Maize';
  marketValue = 1200;
  dailyProduction = 45;
  isModalOpen: boolean = false;
  editUserName: String = this.userName;
  editUserEmail: String = 'johndoe@example.com';
  editUserLocation: String = 'Nairobi, Kenya';

  isProfileSubPage = false;

  crops = [
    {
      name: 'Maize',
      status: 'Growing',
      plantingDate: new Date(),
      harvestDate: new Date(),
    },
    {
      name: 'Wheat',
      status: 'Ready for Harvest',
      plantingDate: new Date(),
      harvestDate: new Date(),
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.checkIfProfileSubPage();
    });
  }

  ngOnInit(): void {
    // Fetching user data from a service to get the user details.
  }

  checkIfProfileSubPage() {
    const subPages = [
      '/profile/my-farm',
      '/profile/market-trends',
    ];
    this.isProfileSubPage = subPages.some((page) =>
      this.router.url.includes(page)
    );
  }

  openEditProfileModal(): void {
    this.isModalOpen = true;
  }

  closeEditProfileModal(): void {
    this.isModalOpen = false;
  }

  onEditProfilePic(): void {
    // Logic to change the profile picture
    alert('Edit Profile Picture clicked');
  }

  openAddCropModal() {
    alert('Open Add Crop Modal');
  }

  onSubmitEditProfile(): void {
    // Logic to save profile changes
    this.userName = this.editUserName;
    // Assuming email and location are also saved.
    alert('Profile updated successfully');
    this.closeEditProfileModal();
  }
}
