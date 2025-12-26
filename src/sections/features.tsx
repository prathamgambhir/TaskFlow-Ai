import { Ecosystem } from "@/components/Icons/ecosystem";
import { GoalTrackingIcon } from "@/components/Icons/goal-tracking";
import { SecurityIcon } from "@/components/Icons/security";

export default function Features() {
  return (
    <section className="bg-black text-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center flex flex-col items-center">
            <div className="bg-white rounded-lg p-2 mb-6">
              <Ecosystem />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Integration Ecosystem
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Enhance your productivity by connecting with your tools, keeping
              your essentials in one place.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center flex flex-col items-center">
            <div className="bg-white rounded-lg p-2 mb-6">
              <GoalTrackingIcon />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Goal Setting and Tracking
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Define and track your goals, breaking down objectives into
              achievable tasks to keep your targets in sight.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center flex flex-col items-center md:col-span-2 lg:col-span-1">
            <div className="bg-white rounded-lg p-2 mb-6">
              <SecurityIcon />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Secure Data Encryption
            </h3>
            <p className="text-gray-400 leading-relaxed">
              With end-to-end encryption, your data is securely stored and
              protected from unauthorized access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
