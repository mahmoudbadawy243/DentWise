import { useUpdateDoctor } from "@/hooks/use-doctors";
import { formatPhoneNumber } from "@/lib/utils";
import { Doctor, Gender } from "@prisma/client";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";

interface EditDoctorDialogProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor | null;
}

function EditDoctorDialog({ doctor, isOpen, onClose }: EditDoctorDialogProps) {
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(doctor);

  const updateDoctorMutation = useUpdateDoctor();
  const { locale } = useParams();
  const dict = (locale === 'ar' ? ar : en) as typeof en;

  const handlePhoneChange = (value: string) => {
    const formattedPhoneNumber = formatPhoneNumber(value);
    if (editingDoctor) {
      setEditingDoctor({ ...editingDoctor, phone: formattedPhoneNumber });
    }
  };

  const handleSave = () => {
    if (editingDoctor) {
      updateDoctorMutation.mutate({ ...editingDoctor }, { onSuccess: handleClose });
    }
  };

  const handleClose = () => {
    onClose();
    setEditingDoctor(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{dict.admin.dialogs.edit.title}</DialogTitle>
          <DialogDescription>{dict.admin.dialogs.edit.description}</DialogDescription>
        </DialogHeader>

        {editingDoctor && (
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">{dict.admin.dialogs.edit.labels.name}</Label>
                <Input
                  id="name"
                  value={editingDoctor.name}
                  onChange={(e) => setEditingDoctor({ ...editingDoctor, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="speciality">{dict.admin.dialogs.edit.labels.speciality}</Label>
                <Input
                  id="speciality"
                  value={editingDoctor.speciality}
                  onChange={(e) =>
                    setEditingDoctor({ ...editingDoctor, speciality: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{dict.admin.dialogs.edit.labels.email}</Label>
              <Input
                id="email"
                type="email"
                value={editingDoctor.email}
                onChange={(e) => setEditingDoctor({ ...editingDoctor, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{dict.admin.dialogs.edit.labels.phone}</Label>
              <Input
                id="phone"
                value={editingDoctor.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                placeholder={dict.admin.dialogs.edit.placeholders.phone}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gender">{dict.admin.dialogs.edit.labels.gender}</Label>
                <Select
                  value={editingDoctor.gender || ""}
                  onValueChange={(value) =>
                    setEditingDoctor({ ...editingDoctor, gender: value as Gender })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder={dict.admin.dialogs.edit.labels.selectGender} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MALE">{dict.admin.doctorsManagement.genderMale}</SelectItem>
                    <SelectItem value="FEMALE">{dict.admin.doctorsManagement.genderFemale}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">{dict.admin.dialogs.edit.labels.status}</Label>
                <Select
                  value={editingDoctor.isActive ? "active" : "inactive"}
                  onValueChange={(value) =>
                    setEditingDoctor({ ...editingDoctor, isActive: value === "active" })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">{dict.admin.dialogs.edit.labels.active}</SelectItem>
                    <SelectItem value="inactive">{dict.admin.dialogs.edit.labels.inactive}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            {dict.admin.dialogs.edit.buttons.cancel}
          </Button>
          <Button
            onClick={handleSave}
            className="bg-primary hover:bg-primary/90"
            disabled={updateDoctorMutation.isPending}
          >
            {updateDoctorMutation.isPending ? dict.admin.dialogs.edit.buttons.saving : dict.admin.dialogs.edit.buttons.save}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditDoctorDialog;
