import Image from "next/image";

export default function TutorProfile({ tutor }) {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <Image
        src={tutor.image}
        alt={tutor.name}
        width={150}
        height={150}
        className="rounded-full"
      />
      <h3 className="text-xl font-bold mt-2">{tutor.name}</h3>
      <p className="text-gray-600">{tutor.subjects.join(", ")}</p>
      <p className="mt-2">{tutor.bio}</p>
      <div className="mt-4">
        <a
          href={`/tutors/${tutor.id}`}
          className="text-indigo-600 hover:text-indigo-800"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}
