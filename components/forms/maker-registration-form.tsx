
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { Select } from "@/components/ui/select";
import { FileUpload } from "@/components/ui/file-upload";
import { CheckboxGroup } from "@/components/ui/checkbox-group";

const makerSchema = z.object({
  // Basic Information
  brandName: z.string().min(1, "Brand/Logo Name is required"),
  makerName: z.string().min(1, "Maker/Organization Name is required"),
  makerStory: z.string().min(1, "Maker Story is required"),
  makerProfile: z.string().min(1, "Maker Profile is required"),
  makerCardNumber: z.string().optional(),
  gender: z.enum(["he", "she", "they", "none"], {
    required_error: "Gender is required"
  }),
  yearsExperience: z.string().min(1, "Years of Experience is required"),
  contactNumber: z.string().min(1, "Contact Number is required"),
  email: z.string().email("Invalid email address"),
  msmeNumber: z.string().optional(),
  registrationDate: z.string().min(1, "Registration Date is required"),
  orgContactNumber: z.string().optional(),
  orgEmail: z.string().optional(),

  // Location Information
  city: z.string().min(1, "City/Town/Village is required"),
  districtPincode: z.string().min(1, "District/Pincode is required"),
  state: z.string().min(1, "State is required"),

  // Craft Details
  craftType: z.string().min(1, "Craft Type is required"),
  craftStory: z.string().min(1, "Craft Story is required"),
  processTechnique: z.string().min(1, "Process/Technique is required"),
  craftTools: z.string().min(1, "Craft Associated Tools is required"),
  uspInnovation: z.string().min(1, "USP/Innovation is required"),

  // Scale & Capacity
  activeMakers: z.string().min(1, "Total Number of Active Makers is required"),
  genderRatio: z.string().min(1, "Ratio of Female:Male Makers is required"),
  languagesKnown: z.string().min(1, "Languages Known is required"),

  // Production Details
  videos: z.string().optional(),
  rawMaterials: z.string().min(1, "Raw Materials Used is required"),
  catalogue: z.string().optional(),
  productsRange: z.string().min(1, "Products Range is required"),
  productionCapacity: z.string().min(1, "Production Capacity per Month is required"),

  // Business Information
  gstNumber: z.string().optional(),
  photos: z.string().optional(),
  socialMediaLinks: z.string().optional(),
  websiteLink: z.string().optional(),
  offlinePresence: z.string().min(1, "Artisan's Offline Presence is required"),

  // Services & Collaboration
  exhibitSpaces: z.string().optional(),
  conductWorkshops: z.string().min(1, "Do you conduct workshops is required"),
  collaborationDesigners: z.string().min(1, "Collaboration with Designers is required"),
  insurance: z.string().min(1, "Insurance is required"),
  certifications: z.string().min(1, "Certifications/Awards is required"),
  certificatesReceived: z.string().optional(),

  // Additional Information
  sustainabilityPractices: z.string().optional(),
  ratingsSystem: z.string().optional(),
  peersReviews: z.string().optional(),

  // Subscription
  subscribeToUpdates: z.boolean().default(true)
});

type MakerFormData = z.infer<typeof makerSchema>;

export default function MakerRegistrationForm({ onBack }: { onBack?: () => void }) {
        const {
                register,
                handleSubmit,
                formState: { errors },
        } = useForm<MakerFormData>({
                resolver: zodResolver(makerSchema),
        });

        const onSubmit = (data: MakerFormData) => {
                // handle form submission
                alert("Registration submitted!" + JSON.stringify(data, null, 2));
        };

        return (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4 w-full">
                        <div className="space-y-1.5 sm:space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" {...register("name")} />
                                {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
                        </div>
                        <div className="space-y-2">
                                <Label htmlFor="craft">Craft</Label>
                                <Input id="craft" {...register("craft")} />
                                {errors.craft && <span className="text-sm text-red-500">{errors.craft.message}</span>}
                        </div>
                        <div className="space-y-2">
                                <Label htmlFor="location">Location</Label>
                                <Input id="location" {...register("location")} />
                                {errors.location && <span className="text-sm text-red-500">{errors.location.message}</span>}
                        </div>
                        <div className="space-y-2">
                                <Label htmlFor="state">State</Label>
                                <Input id="state" {...register("state")} />
                                {errors.state && <span className="text-sm text-red-500">{errors.state.message}</span>}
                        </div>
                        <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" {...register("phone")} />
                                {errors.phone && <span className="text-sm text-red-500">{errors.phone.message}</span>}
                        </div>
                        <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" {...register("email")} />
                                {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                        </div>
                        <div className="space-y-2">
                                <Label htmlFor="experience">Experience</Label>
                                <Input id="experience" {...register("experience")} />
                                {errors.experience && <span className="text-sm text-red-500">{errors.experience.message}</span>}
                        </div>
                        <div className="space-y-2">
                                <Label htmlFor="story">Your Story</Label>
                                <Textarea id="story" {...register("story")} />
                                {errors.story && <span className="text-sm text-red-500">{errors.story.message}</span>}
                        </div>
                        <div className="space-y-2">
                                <Label htmlFor="products">Products Made</Label>
                                <Input id="products" {...register("products")} />
                                {errors.products && <span className="text-sm text-red-500">{errors.products.message}</span>}
                        </div>
                        <div className="space-y-2">
                                <Label htmlFor="awards">Awards (optional)</Label>
                                <Input id="awards" {...register("awards")} />
                        </div>
                        <div className="space-y-2">
                                <Label htmlFor="sustainability">Sustainability (optional)</Label>
                                <Input id="sustainability" {...register("sustainability")} />
                        </div>
                        <div className="space-y-2">
                                <Label htmlFor="socialLinks">Social Links (optional)</Label>
                                <Input id="socialLinks" {...register("socialLinks")} />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 pt-2">
                                {onBack && <Button type="button" variant="outline" onClick={onBack} className="w-full sm:w-auto">Back</Button>}
                                <Button type="submit" className="w-full sm:flex-1">Register</Button>
                        </div>
                </form>
        );
}
