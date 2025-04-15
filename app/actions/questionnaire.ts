"use server";

import { redirect } from "next/navigation";

export async function submitQuestionnaire(formData: FormData) {
    // Validate required fields
    const age = formData.get("age");
    const venueTypes = formData.getAll("venueTypes");
    const preferredDays = formData.getAll("preferredDays");
    const preferredTime = formData.get("preferredTime");
    const industry = formData.get("industry");
    const topics = formData.getAll("topics");
    const preferredAreas = formData.getAll("preferredAreas");

    const errors: Record<string, string> = {};

    if (!age) errors.age = "Please select your age range (required)";
    if (venueTypes.length === 0) errors.venueTypes = "Please select at least one venue type (minimum 1)";
    if (preferredDays.length === 0) errors.preferredDays = "Please select at least one preferred day (minimum 1)";
    if (!preferredTime) errors.preferredTime = "Please select your preferred time (required)";
    if (!industry) errors.industry = "Please select your industry (required)";
    if (topics.length === 0) errors.topics = "Please select at least one topic (minimum 1)";
    if (preferredAreas.length === 0) errors.preferredAreas = "Please select at least one preferred area (minimum 1)";

    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    // If validation passes, proceed with form submission
    console.log(age, venueTypes, preferredDays, preferredTime, industry, topics, preferredAreas);
    redirect("/questionnaire/results");
} 