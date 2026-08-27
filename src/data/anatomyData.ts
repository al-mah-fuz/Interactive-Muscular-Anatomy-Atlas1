/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AnatomicalStructure {
  id: string;
  name: string;
  rawMeshName: string;
  type: 'muscle' | 'tendon_ligament' | 'bone';
  region: string;
  layer: 'superficial' | 'intermediate' | 'deep' | 'skeletal';
  origin: string;
  insertion: string;
  action: string;
  innervation: string;
  arterialSupply: string;
  description: string;
}

export const ANATOMY_STRUCTURES: AnatomicalStructure[] = [
  {
    "id": "muscle_abdominal_part_of_left_pectoralis_major",
    "name": "Abdominal Part Of Left Pectoralis Major",
    "rawMeshName": "abdominal part of left pectoralis major",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Clavicular head: anterior medial clavicle; Sternocostal head: anterior sternum, costal cartilages 1-6.",
    "insertion": "Lateral lip of the bicipital groove of humerus.",
    "action": "Adducts, flexes, and medially rotates the arm at the glenohumeral joint.",
    "innervation": "Lateral and medial pectoral nerves (C5-T1).",
    "arterialSupply": "Pectoral branch of thoracoacromial trunk and internal thoracic artery.",
    "description": "Large fan-shaped muscle of the anterior thoracic wall establishing primary power for upper extremity adduction and horizontal flexion."
  },
  {
    "id": "muscle_abdominal_part_of_right_pectoralis_major",
    "name": "Abdominal Part Of Right Pectoralis Major",
    "rawMeshName": "abdominal part of right pectoralis major",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Clavicular head: anterior medial clavicle; Sternocostal head: anterior sternum, costal cartilages 1-6.",
    "insertion": "Lateral lip of the bicipital groove of humerus.",
    "action": "Adducts, flexes, and medially rotates the arm at the glenohumeral joint.",
    "innervation": "Lateral and medial pectoral nerves (C5-T1).",
    "arterialSupply": "Pectoral branch of thoracoacromial trunk and internal thoracic artery.",
    "description": "Large fan-shaped muscle of the anterior thoracic wall establishing primary power for upper extremity adduction and horizontal flexion."
  },
  {
    "id": "muscle_abductor_digiti_minimi_of_left_foot",
    "name": "Abductor Digiti Minimi Of Left Foot",
    "rawMeshName": "abductor digiti minimi of left foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Abductor Digiti Minimi Of Left Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_abductor_digiti_minimi_of_left_hand",
    "name": "Abductor Digiti Minimi Of Left Hand",
    "rawMeshName": "abductor digiti minimi of left hand",
    "type": "muscle",
    "region": "Hand",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Abductor Digiti Minimi Of Left Hand) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_abductor_digiti_minimi_of_right_foot",
    "name": "Abductor Digiti Minimi Of Right Foot",
    "rawMeshName": "abductor digiti minimi of right foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Abductor Digiti Minimi Of Right Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_abductor_digiti_minimi_of_right_hand",
    "name": "Abductor Digiti Minimi Of Right Hand",
    "rawMeshName": "abductor digiti minimi of right hand",
    "type": "muscle",
    "region": "Hand",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Abductor Digiti Minimi Of Right Hand) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_acromial_part_of_left_deltoid",
    "name": "Acromial Part Of Left Deltoid",
    "rawMeshName": "acromial part of left deltoid",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Clavicular part: lateral 1/3 of clavicle; Acromial part: acromion; Spinal part: spine of scapula.",
    "insertion": "Deltoid tuberosity on the lateral shaft of humerus.",
    "action": "Prime mover of arm abduction (15Â°-90Â°); anterior fibers flex/medially rotate; posterior fibers extend/laterally rotate.",
    "innervation": "Axillary nerve (C5, C6).",
    "arterialSupply": "Posterior circumflex humeral artery and deltoid branch of thoracoacromial artery.",
    "description": "Prominent triangular muscle forming the rounded contour of the human shoulder with tripartite functional vectors."
  },
  {
    "id": "muscle_acromial_part_of_right_deltoid",
    "name": "Acromial Part Of Right Deltoid",
    "rawMeshName": "acromial part of right deltoid",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Clavicular part: lateral 1/3 of clavicle; Acromial part: acromion; Spinal part: spine of scapula.",
    "insertion": "Deltoid tuberosity on the lateral shaft of humerus.",
    "action": "Prime mover of arm abduction (15Â°-90Â°); anterior fibers flex/medially rotate; posterior fibers extend/laterally rotate.",
    "innervation": "Axillary nerve (C5, C6).",
    "arterialSupply": "Posterior circumflex humeral artery and deltoid branch of thoracoacromial artery.",
    "description": "Prominent triangular muscle forming the rounded contour of the human shoulder with tripartite functional vectors."
  },
  {
    "id": "muscle_ascending_part_of_left_trapezius",
    "name": "Ascending Part Of Left Trapezius",
    "rawMeshName": "ascending part of left trapezius",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "External occipital protuberance, nuchal ligament, and spinous processes of C7-T12 vertebrae.",
    "insertion": "Lateral 1/3 of clavicle, acromion, and spine of scapula.",
    "action": "Elevates, retracts, and superiorly rotates the scapula; extends and laterally flexes neck.",
    "innervation": "Spinal accessory nerve (CN XI) motor; C3-C4 sensory proprioception.",
    "arterialSupply": "Transverse cervical artery and dorsal scapular artery.",
    "description": "Expansive superficial diamond-shaped back muscle connecting the axial skeleton to the pectoral girdle."
  },
  {
    "id": "muscle_ascending_part_of_right_trapezius",
    "name": "Ascending Part Of Right Trapezius",
    "rawMeshName": "ascending part of right trapezius",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "External occipital protuberance, nuchal ligament, and spinous processes of C7-T12 vertebrae.",
    "insertion": "Lateral 1/3 of clavicle, acromion, and spine of scapula.",
    "action": "Elevates, retracts, and superiorly rotates the scapula; extends and laterally flexes neck.",
    "innervation": "Spinal accessory nerve (CN XI) motor; C3-C4 sensory proprioception.",
    "arterialSupply": "Transverse cervical artery and dorsal scapular artery.",
    "description": "Expansive superficial diamond-shaped back muscle connecting the axial skeleton to the pectoral girdle."
  },
  {
    "id": "muscle_clavicular_part_of_left_deltoid",
    "name": "Clavicular Part Of Left Deltoid",
    "rawMeshName": "clavicular part of left deltoid",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Clavicular part: lateral 1/3 of clavicle; Acromial part: acromion; Spinal part: spine of scapula.",
    "insertion": "Deltoid tuberosity on the lateral shaft of humerus.",
    "action": "Prime mover of arm abduction (15Â°-90Â°); anterior fibers flex/medially rotate; posterior fibers extend/laterally rotate.",
    "innervation": "Axillary nerve (C5, C6).",
    "arterialSupply": "Posterior circumflex humeral artery and deltoid branch of thoracoacromial artery.",
    "description": "Prominent triangular muscle forming the rounded contour of the human shoulder with tripartite functional vectors."
  },
  {
    "id": "muscle_clavicular_part_of_left_pectoralis_major",
    "name": "Clavicular Part Of Left Pectoralis Major",
    "rawMeshName": "clavicular part of left pectoralis major",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Clavicular head: anterior medial clavicle; Sternocostal head: anterior sternum, costal cartilages 1-6.",
    "insertion": "Lateral lip of the bicipital groove of humerus.",
    "action": "Adducts, flexes, and medially rotates the arm at the glenohumeral joint.",
    "innervation": "Lateral and medial pectoral nerves (C5-T1).",
    "arterialSupply": "Pectoral branch of thoracoacromial trunk and internal thoracic artery.",
    "description": "Large fan-shaped muscle of the anterior thoracic wall establishing primary power for upper extremity adduction and horizontal flexion."
  },
  {
    "id": "muscle_clavicular_part_of_right_deltoid",
    "name": "Clavicular Part Of Right Deltoid",
    "rawMeshName": "clavicular part of right deltoid",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Clavicular part: lateral 1/3 of clavicle; Acromial part: acromion; Spinal part: spine of scapula.",
    "insertion": "Deltoid tuberosity on the lateral shaft of humerus.",
    "action": "Prime mover of arm abduction (15Â°-90Â°); anterior fibers flex/medially rotate; posterior fibers extend/laterally rotate.",
    "innervation": "Axillary nerve (C5, C6).",
    "arterialSupply": "Posterior circumflex humeral artery and deltoid branch of thoracoacromial artery.",
    "description": "Prominent triangular muscle forming the rounded contour of the human shoulder with tripartite functional vectors."
  },
  {
    "id": "muscle_clavicular_part_of_right_pectoralis_major",
    "name": "Clavicular Part Of Right Pectoralis Major",
    "rawMeshName": "clavicular part of right pectoralis major",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Clavicular head: anterior medial clavicle; Sternocostal head: anterior sternum, costal cartilages 1-6.",
    "insertion": "Lateral lip of the bicipital groove of humerus.",
    "action": "Adducts, flexes, and medially rotates the arm at the glenohumeral joint.",
    "innervation": "Lateral and medial pectoral nerves (C5-T1).",
    "arterialSupply": "Pectoral branch of thoracoacromial trunk and internal thoracic artery.",
    "description": "Large fan-shaped muscle of the anterior thoracic wall establishing primary power for upper extremity adduction and horizontal flexion."
  },
  {
    "id": "muscle_descending_part_of_left_trapezius",
    "name": "Descending Part Of Left Trapezius",
    "rawMeshName": "descending part of left trapezius",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "External occipital protuberance, nuchal ligament, and spinous processes of C7-T12 vertebrae.",
    "insertion": "Lateral 1/3 of clavicle, acromion, and spine of scapula.",
    "action": "Elevates, retracts, and superiorly rotates the scapula; extends and laterally flexes neck.",
    "innervation": "Spinal accessory nerve (CN XI) motor; C3-C4 sensory proprioception.",
    "arterialSupply": "Transverse cervical artery and dorsal scapular artery.",
    "description": "Expansive superficial diamond-shaped back muscle connecting the axial skeleton to the pectoral girdle."
  },
  {
    "id": "muscle_descending_part_of_right_trapezius",
    "name": "Descending Part Of Right Trapezius",
    "rawMeshName": "descending part of right trapezius",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "External occipital protuberance, nuchal ligament, and spinous processes of C7-T12 vertebrae.",
    "insertion": "Lateral 1/3 of clavicle, acromion, and spine of scapula.",
    "action": "Elevates, retracts, and superiorly rotates the scapula; extends and laterally flexes neck.",
    "innervation": "Spinal accessory nerve (CN XI) motor; C3-C4 sensory proprioception.",
    "arterialSupply": "Transverse cervical artery and dorsal scapular artery.",
    "description": "Expansive superficial diamond-shaped back muscle connecting the axial skeleton to the pectoral girdle."
  },
  {
    "id": "muscle_diaphragm",
    "name": "Diaphragm",
    "rawMeshName": "diaphragm",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Diaphragm) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_external_anal_sphincter",
    "name": "External Anal Sphincter",
    "rawMeshName": "external anal sphincter",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (External Anal Sphincter) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_external_anal_sphincter__2_",
    "name": "External Anal Sphincter (2)",
    "rawMeshName": "external anal sphincter (2)",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (External Anal Sphincter (2)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_external_anal_sphincter__3_",
    "name": "External Anal Sphincter (3)",
    "rawMeshName": "external anal sphincter (3)",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (External Anal Sphincter (3)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_external_intercostal_muscle",
    "name": "External Intercostal Muscle",
    "rawMeshName": "external intercostal muscle",
    "type": "muscle",
    "region": "Thorax",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (External Intercostal Muscle) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_first_lumbrical_of_left_foot",
    "name": "First Lumbrical Of Left Foot",
    "rawMeshName": "first lumbrical of left foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (First Lumbrical Of Left Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_first_lumbrical_of_right_foot",
    "name": "First Lumbrical Of Right Foot",
    "rawMeshName": "first lumbrical of right foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (First Lumbrical Of Right Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_first_plantar_interosseous_of_left_foot",
    "name": "First Plantar Interosseous Of Left Foot",
    "rawMeshName": "first plantar interosseous of left foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (First Plantar Interosseous Of Left Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_first_plantar_interosseous_of_right_foot",
    "name": "First Plantar Interosseous Of Right Foot",
    "rawMeshName": "first plantar interosseous of right foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (First Plantar Interosseous Of Right Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_flexor_digiti_minimi_brevis_of_left_foot",
    "name": "Flexor Digiti Minimi Brevis Of Left Foot",
    "rawMeshName": "flexor digiti minimi brevis of left foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Flexor Digiti Minimi Brevis Of Left Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_flexor_digiti_minimi_brevis_of_left_hand",
    "name": "Flexor Digiti Minimi Brevis Of Left Hand",
    "rawMeshName": "flexor digiti minimi brevis of left hand",
    "type": "muscle",
    "region": "Hand",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Flexor Digiti Minimi Brevis Of Left Hand) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_flexor_digiti_minimi_brevis_of_right_foot",
    "name": "Flexor Digiti Minimi Brevis Of Right Foot",
    "rawMeshName": "flexor digiti minimi brevis of right foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Flexor Digiti Minimi Brevis Of Right Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_flexor_digiti_minimi_brevis_of_right_hand",
    "name": "Flexor Digiti Minimi Brevis Of Right Hand",
    "rawMeshName": "flexor digiti minimi brevis of right hand",
    "type": "muscle",
    "region": "Hand",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Flexor Digiti Minimi Brevis Of Right Hand) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_flexor_retinaculum_of_left_wrist",
    "name": "Flexor Retinaculum Of Left Wrist",
    "rawMeshName": "flexor retinaculum of left wrist",
    "type": "tendon_ligament",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Flexor Retinaculum Of Left Wrist) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_flexor_retinaculum_of_right_wrist",
    "name": "Flexor Retinaculum Of Right Wrist",
    "rawMeshName": "flexor retinaculum of right wrist",
    "type": "tendon_ligament",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Flexor Retinaculum Of Right Wrist) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_fourth_lumbrical_of_left_foot",
    "name": "Fourth Lumbrical Of Left Foot",
    "rawMeshName": "fourth lumbrical of left foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Fourth Lumbrical Of Left Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_fourth_lumbrical_of_right_foot",
    "name": "Fourth Lumbrical Of Right Foot",
    "rawMeshName": "fourth lumbrical of right foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Fourth Lumbrical Of Right Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_humeral_head_of_left_flexor_carpi_ulnaris",
    "name": "Humeral Head Of Left Flexor Carpi Ulnaris",
    "rawMeshName": "humeral head of left flexor carpi ulnaris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Humeral Head Of Left Flexor Carpi Ulnaris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_humeral_head_of_left_pronator_teres",
    "name": "Humeral Head Of Left Pronator Teres",
    "rawMeshName": "humeral head of left pronator teres",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Humeral Head Of Left Pronator Teres) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_humeral_head_of_right_flexor_carpi_ulnaris",
    "name": "Humeral Head Of Right Flexor Carpi Ulnaris",
    "rawMeshName": "humeral head of right flexor carpi ulnaris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Humeral Head Of Right Flexor Carpi Ulnaris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_humeral_head_of_right_pronator_teres",
    "name": "Humeral Head Of Right Pronator Teres",
    "rawMeshName": "humeral head of right pronator teres",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Humeral Head Of Right Pronator Teres) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_inferior_oblique_part_of_left_longus_colli",
    "name": "Inferior Oblique Part Of Left Longus Colli",
    "rawMeshName": "inferior oblique part of left longus colli",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Inferior Oblique Part Of Left Longus Colli) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_innermost_intercostal_muscle",
    "name": "Innermost Intercostal Muscle",
    "rawMeshName": "innermost intercostal muscle",
    "type": "muscle",
    "region": "Thorax",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Innermost Intercostal Muscle) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_internal_intercostal_muscle",
    "name": "Internal Intercostal Muscle",
    "rawMeshName": "internal intercostal muscle",
    "type": "muscle",
    "region": "Thorax",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Internal Intercostal Muscle) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_interosseous_membrane_of_left_forearm",
    "name": "Interosseous Membrane Of Left Forearm",
    "rawMeshName": "interosseous membrane of left forearm",
    "type": "tendon_ligament",
    "region": "Thorax",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Interosseous Membrane Of Left Forearm) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_interosseous_membrane_of_left_leg",
    "name": "Interosseous Membrane Of Left Leg",
    "rawMeshName": "interosseous membrane of left leg",
    "type": "tendon_ligament",
    "region": "Thorax",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Interosseous Membrane Of Left Leg) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_interosseous_membrane_of_right_forearm",
    "name": "Interosseous Membrane Of Right Forearm",
    "rawMeshName": "interosseous membrane of right forearm",
    "type": "tendon_ligament",
    "region": "Thorax",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Interosseous Membrane Of Right Forearm) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_interosseous_membrane_of_right_leg",
    "name": "Interosseous Membrane Of Right Leg",
    "rawMeshName": "interosseous membrane of right leg",
    "type": "tendon_ligament",
    "region": "Thorax",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Interosseous Membrane Of Right Leg) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_lateral_head_of_left_flexor_hallucis_brevis",
    "name": "Lateral Head Of Left Flexor Hallucis Brevis",
    "rawMeshName": "lateral head of left flexor hallucis brevis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Lateral Head Of Left Flexor Hallucis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_lateral_head_of_left_gastrocnemius",
    "name": "Lateral Head Of Left Gastrocnemius",
    "rawMeshName": "lateral head of left gastrocnemius",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Medial head: medial condyle of femur; Lateral head: lateral condyle of femur.",
    "insertion": "Posterior surface of calcaneus via the calcaneal (Achilles) tendon.",
    "action": "Plantarflexes the foot at the talocrural ankle joint and assists in knee flexion.",
    "innervation": "Tibial nerve (S1, S2).",
    "arterialSupply": "Sural branches of the popliteal artery.",
    "description": "Prominent two-bellied superficial calf muscle generating powerful ground-reaction propulsion during sprinting and jumping."
  },
  {
    "id": "muscle_lateral_head_of_left_triceps_brachii",
    "name": "Lateral Head Of Left Triceps Brachii",
    "rawMeshName": "lateral head of left triceps brachii",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Long head: infraglenoid tubercle; Lateral head: posterior humerus above radial groove; Medial head: posterior humerus below radial groove.",
    "insertion": "Olecranon process of the ulna.",
    "action": "Primary extensor of the elbow joint; long head stabilizes abducted shoulder.",
    "innervation": "Radial nerve (C6-C8).",
    "arterialSupply": "Deep brachial (profunda brachii) artery and posterior circumflex humeral artery.",
    "description": "Three-headed posterior arm muscle delivering total extension torque across the humero-ulnar articulation."
  },
  {
    "id": "muscle_lateral_head_of_right_flexor_hallucis_brevis",
    "name": "Lateral Head Of Right Flexor Hallucis Brevis",
    "rawMeshName": "lateral head of right flexor hallucis brevis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Lateral Head Of Right Flexor Hallucis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_lateral_head_of_right_gastrocnemius",
    "name": "Lateral Head Of Right Gastrocnemius",
    "rawMeshName": "lateral head of right gastrocnemius",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Medial head: medial condyle of femur; Lateral head: lateral condyle of femur.",
    "insertion": "Posterior surface of calcaneus via the calcaneal (Achilles) tendon.",
    "action": "Plantarflexes the foot at the talocrural ankle joint and assists in knee flexion.",
    "innervation": "Tibial nerve (S1, S2).",
    "arterialSupply": "Sural branches of the popliteal artery.",
    "description": "Prominent two-bellied superficial calf muscle generating powerful ground-reaction propulsion during sprinting and jumping."
  },
  {
    "id": "muscle_lateral_head_of_right_triceps_brachii",
    "name": "Lateral Head Of Right Triceps Brachii",
    "rawMeshName": "lateral head of right triceps brachii",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Long head: infraglenoid tubercle; Lateral head: posterior humerus above radial groove; Medial head: posterior humerus below radial groove.",
    "insertion": "Olecranon process of the ulna.",
    "action": "Primary extensor of the elbow joint; long head stabilizes abducted shoulder.",
    "innervation": "Radial nerve (C6-C8).",
    "arterialSupply": "Deep brachial (profunda brachii) artery and posterior circumflex humeral artery.",
    "description": "Three-headed posterior arm muscle delivering total extension torque across the humero-ulnar articulation."
  },
  {
    "id": "muscle_lateral_lumbar_intertransversarius",
    "name": "Lateral Lumbar Intertransversarius",
    "rawMeshName": "lateral lumbar intertransversarius",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Lateral Lumbar Intertransversarius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_abductor_hallucis",
    "name": "Left Abductor Hallucis",
    "rawMeshName": "left abductor hallucis",
    "type": "muscle",
    "region": "Foot",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Abductor Hallucis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_abductor_pollicis_brevis",
    "name": "Left Abductor Pollicis Brevis",
    "rawMeshName": "left abductor pollicis brevis",
    "type": "muscle",
    "region": "Hand",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Abductor Pollicis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_abductor_pollicis_longus",
    "name": "Left Abductor Pollicis Longus",
    "rawMeshName": "left abductor pollicis longus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Abductor Pollicis Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_adductor_brevis",
    "name": "Left Adductor Brevis",
    "rawMeshName": "left adductor brevis",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Adductor Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_adductor_longus",
    "name": "Left Adductor Longus",
    "rawMeshName": "left adductor longus",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Adductor Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_adductor_magnus",
    "name": "Left Adductor Magnus",
    "rawMeshName": "left adductor magnus",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Adductor Magnus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_adductor_minimus",
    "name": "Left Adductor Minimus",
    "rawMeshName": "left adductor minimus",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Adductor Minimus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_anconeus",
    "name": "Left Anconeus",
    "rawMeshName": "left anconeus",
    "type": "muscle",
    "region": "Arm & Elbow",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Anconeus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_arytenoid_cartilage",
    "name": "Left Arytenoid Cartilage",
    "rawMeshName": "left arytenoid cartilage",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Arytenoid Cartilage) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_brachialis",
    "name": "Left Brachialis",
    "rawMeshName": "left brachialis",
    "type": "muscle",
    "region": "Arm & Elbow",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Brachialis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_brachioradialis",
    "name": "Left Brachioradialis",
    "rawMeshName": "left brachioradialis",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Brachioradialis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_calcaneal_tendon",
    "name": "Left Calcaneal Tendon",
    "rawMeshName": "left calcaneal tendon",
    "type": "tendon_ligament",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Calcaneal Tendon) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_coccygeus",
    "name": "Left Coccygeus",
    "rawMeshName": "left coccygeus",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Coccygeus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_coccygeus__2_",
    "name": "Left Coccygeus (2)",
    "rawMeshName": "left coccygeus (2)",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Coccygeus (2)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_coracobrachialis",
    "name": "Left Coracobrachialis",
    "rawMeshName": "left coracobrachialis",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Coracobrachialis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_digastric",
    "name": "Left Digastric",
    "rawMeshName": "left digastric",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Digastric) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_digastric__2_",
    "name": "Left Digastric (2)",
    "rawMeshName": "left digastric (2)",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Digastric (2)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_digastric__3_",
    "name": "Left Digastric (3)",
    "rawMeshName": "left digastric (3)",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Digastric (3)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_extensor_carpi_radialis_brevis",
    "name": "Left Extensor Carpi Radialis Brevis",
    "rawMeshName": "left extensor carpi radialis brevis",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Extensor Carpi Radialis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_extensor_carpi_radialis_longus",
    "name": "Left Extensor Carpi Radialis Longus",
    "rawMeshName": "left extensor carpi radialis longus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Extensor Carpi Radialis Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_extensor_carpi_ulnaris",
    "name": "Left Extensor Carpi Ulnaris",
    "rawMeshName": "left extensor carpi ulnaris",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Extensor Carpi Ulnaris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_extensor_carpi_ulnaris__2_",
    "name": "Left Extensor Carpi Ulnaris (2)",
    "rawMeshName": "left extensor carpi ulnaris (2)",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Extensor Carpi Ulnaris (2)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_extensor_digiti_minimi",
    "name": "Left Extensor Digiti Minimi",
    "rawMeshName": "left extensor digiti minimi",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Extensor Digiti Minimi) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_extensor_digitorum",
    "name": "Left Extensor Digitorum",
    "rawMeshName": "left extensor digitorum",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Extensor Digitorum) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_extensor_digitorum_longus",
    "name": "Left Extensor Digitorum Longus",
    "rawMeshName": "left extensor digitorum longus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Extensor Digitorum Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_extensor_hallucis_brevis",
    "name": "Left Extensor Hallucis Brevis",
    "rawMeshName": "left extensor hallucis brevis",
    "type": "muscle",
    "region": "Foot",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Extensor Hallucis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_extensor_hallucis_longus",
    "name": "Left Extensor Hallucis Longus",
    "rawMeshName": "left extensor hallucis longus",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Extensor Hallucis Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_extensor_indicis",
    "name": "Left Extensor Indicis",
    "rawMeshName": "left extensor indicis",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Extensor Indicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_extensor_pollicis_brevis",
    "name": "Left Extensor Pollicis Brevis",
    "rawMeshName": "left extensor pollicis brevis",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Extensor Pollicis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_extensor_pollicis_longus",
    "name": "Left Extensor Pollicis Longus",
    "rawMeshName": "left extensor pollicis longus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Extensor Pollicis Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_external_oblique",
    "name": "Left External Oblique",
    "rawMeshName": "left external oblique",
    "type": "muscle",
    "region": "Abdomen",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left External Oblique) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_fibularis_brevis",
    "name": "Left Fibularis Brevis",
    "rawMeshName": "left fibularis brevis",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Fibularis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_fibularis_longus",
    "name": "Left Fibularis Longus",
    "rawMeshName": "left fibularis longus",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Fibularis Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_fibularis_tertius",
    "name": "Left Fibularis Tertius",
    "rawMeshName": "left fibularis tertius",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Fibularis Tertius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_flexor_accessorius",
    "name": "Left Flexor Accessorius",
    "rawMeshName": "left flexor accessorius",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Flexor Accessorius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_flexor_carpi_radialis",
    "name": "Left Flexor Carpi Radialis",
    "rawMeshName": "left flexor carpi radialis",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Flexor Carpi Radialis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_flexor_digitorum_brevis",
    "name": "Left Flexor Digitorum Brevis",
    "rawMeshName": "left flexor digitorum brevis",
    "type": "muscle",
    "region": "Foot",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Flexor Digitorum Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_flexor_digitorum_longus",
    "name": "Left Flexor Digitorum Longus",
    "rawMeshName": "left flexor digitorum longus",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Flexor Digitorum Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_flexor_digitorum_profundus",
    "name": "Left Flexor Digitorum Profundus",
    "rawMeshName": "left flexor digitorum profundus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Flexor Digitorum Profundus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_flexor_digitorum_superficialis",
    "name": "Left Flexor Digitorum Superficialis",
    "rawMeshName": "left flexor digitorum superficialis",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Flexor Digitorum Superficialis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_flexor_digitorum_superficialis__2_",
    "name": "Left Flexor Digitorum Superficialis (2)",
    "rawMeshName": "left flexor digitorum superficialis (2)",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Flexor Digitorum Superficialis (2)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_flexor_hallucis_longus",
    "name": "Left Flexor Hallucis Longus",
    "rawMeshName": "left flexor hallucis longus",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Flexor Hallucis Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_flexor_pollicis_brevis",
    "name": "Left Flexor Pollicis Brevis",
    "rawMeshName": "left flexor pollicis brevis",
    "type": "muscle",
    "region": "Hand",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Flexor Pollicis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_flexor_pollicis_longus",
    "name": "Left Flexor Pollicis Longus",
    "rawMeshName": "left flexor pollicis longus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Flexor Pollicis Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_gemellus_inferior",
    "name": "Left Gemellus Inferior",
    "rawMeshName": "left gemellus inferior",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Gemellus Inferior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_gemellus_superior",
    "name": "Left Gemellus Superior",
    "rawMeshName": "left gemellus superior",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Gemellus Superior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_geniohyoid",
    "name": "Left Geniohyoid",
    "rawMeshName": "left geniohyoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Geniohyoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_gluteus_maximus",
    "name": "Left Gluteus Maximus",
    "rawMeshName": "left gluteus maximus",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "superficial",
    "origin": "Outer slope of dorsal ilium behind posterior gluteal line, sacrum, coccyx, and sacrotuberous ligament.",
    "insertion": "Iliotibial tract and gluteal tuberosity of the femur.",
    "action": "Powerful extensor and lateral rotator of the hip joint; steadies the pelvis on the femur during upright posture.",
    "innervation": "Inferior gluteal nerve (L5, S1, S2).",
    "arterialSupply": "Superior and inferior gluteal arteries.",
    "description": "The largest, heaviest, and most powerful muscle in the human body, vital for bipedal erect stance, climbing, and running."
  },
  {
    "id": "muscle_left_gluteus_medius",
    "name": "Left Gluteus Medius",
    "rawMeshName": "left gluteus medius",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "superficial",
    "origin": "Outer surface of the ilium between the anterior and posterior gluteal lines.",
    "insertion": "Lateral surface of the greater trochanter of the femur.",
    "action": "Abducts and medially rotates the hip; prevents pelvic drop on the contralateral side during single-leg stance.",
    "innervation": "Superior gluteal nerve (L4, L5, S1).",
    "arterialSupply": "Superior gluteal artery and deep branch.",
    "description": "Crucial fan-shaped lateral pelvic stabilizer maintaining coronal plane equilibrium during the gait cycle."
  },
  {
    "id": "muscle_left_gluteus_minimus",
    "name": "Left Gluteus Minimus",
    "rawMeshName": "left gluteus minimus",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Gluteus Minimus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_gracilis",
    "name": "Left Gracilis",
    "rawMeshName": "left gracilis",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Gracilis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_iliacus",
    "name": "Left Iliacus",
    "rawMeshName": "left iliacus",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Iliacus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_iliococcygeus",
    "name": "Left Iliococcygeus",
    "rawMeshName": "left iliococcygeus",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Iliococcygeus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_iliococcygeus__2_",
    "name": "Left Iliococcygeus (2)",
    "rawMeshName": "left iliococcygeus (2)",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Iliococcygeus (2)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_iliocostalis_cervicis",
    "name": "Left Iliocostalis Cervicis",
    "rawMeshName": "left iliocostalis cervicis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Iliocostalis Cervicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_iliocostalis_lumborum",
    "name": "Left Iliocostalis Lumborum",
    "rawMeshName": "left iliocostalis lumborum",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Iliocostalis Lumborum) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_iliocostalis_thoracis",
    "name": "Left Iliocostalis Thoracis",
    "rawMeshName": "left iliocostalis thoracis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Iliocostalis Thoracis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_inferior_oblique",
    "name": "Left Inferior Oblique",
    "rawMeshName": "left inferior oblique",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Inferior Oblique) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_inferior_rectus",
    "name": "Left Inferior Rectus",
    "rawMeshName": "left inferior rectus",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Inferior Rectus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_infraspinatus_muscle",
    "name": "Left Infraspinatus Muscle",
    "rawMeshName": "left infraspinatus muscle",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Infraspinatus Muscle) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_interspinalis_thoracis",
    "name": "Left Interspinalis Thoracis",
    "rawMeshName": "left interspinalis thoracis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Interspinalis Thoracis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_lateral_crico_arytenoid",
    "name": "Left Lateral Crico-Arytenoid",
    "rawMeshName": "left lateral crico-arytenoid",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Lateral Crico-Arytenoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_lateral_rectus",
    "name": "Left Lateral Rectus",
    "rawMeshName": "left lateral rectus",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Lateral Rectus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_levator_palpebrae_superioris",
    "name": "Left Levator Palpebrae Superioris",
    "rawMeshName": "left levator palpebrae superioris",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Levator Palpebrae Superioris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_levator_scapulae",
    "name": "Left Levator Scapulae",
    "rawMeshName": "left levator scapulae",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Levator Scapulae) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_levator_veli_palatini",
    "name": "Left Levator Veli Palatini",
    "rawMeshName": "left levator veli palatini",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Levator Veli Palatini) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_long_plantar_ligament",
    "name": "Left Long Plantar Ligament",
    "rawMeshName": "left long plantar ligament",
    "type": "tendon_ligament",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Long Plantar Ligament) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_longissimus_capitis",
    "name": "Left Longissimus Capitis",
    "rawMeshName": "left longissimus capitis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Longissimus Capitis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_longissimus_cervicis",
    "name": "Left Longissimus Cervicis",
    "rawMeshName": "left longissimus cervicis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Longissimus Cervicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_longissimus_thoracis",
    "name": "Left Longissimus Thoracis",
    "rawMeshName": "left longissimus thoracis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Longissimus Thoracis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_longus_capitis",
    "name": "Left Longus Capitis",
    "rawMeshName": "left longus capitis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Longus Capitis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_medial_rectus",
    "name": "Left Medial Rectus",
    "rawMeshName": "left medial rectus",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Medial Rectus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_mylohyoid",
    "name": "Left Mylohyoid",
    "rawMeshName": "left mylohyoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Mylohyoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_oblique_arytenoid",
    "name": "Left Oblique Arytenoid",
    "rawMeshName": "left oblique arytenoid",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Oblique Arytenoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_obturator_externus",
    "name": "Left Obturator Externus",
    "rawMeshName": "left obturator externus",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Obturator Externus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_obturator_internus",
    "name": "Left Obturator Internus",
    "rawMeshName": "left obturator internus",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Obturator Internus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_omohyoid",
    "name": "Left Omohyoid",
    "rawMeshName": "left omohyoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Omohyoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_opponens_pollicis",
    "name": "Left Opponens Pollicis",
    "rawMeshName": "left opponens pollicis",
    "type": "muscle",
    "region": "Hand",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Opponens Pollicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_palmaris_longus",
    "name": "Left Palmaris Longus",
    "rawMeshName": "left palmaris longus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Palmaris Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_pectineus",
    "name": "Left Pectineus",
    "rawMeshName": "left pectineus",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Pectineus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_pectoralis_minor",
    "name": "Left Pectoralis Minor",
    "rawMeshName": "left pectoralis minor",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Pectoralis Minor) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_piriformis",
    "name": "Left Piriformis",
    "rawMeshName": "left piriformis",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Piriformis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_plantaris",
    "name": "Left Plantaris",
    "rawMeshName": "left plantaris",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Plantaris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_platysma",
    "name": "Left Platysma",
    "rawMeshName": "left platysma",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Platysma) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_popliteus",
    "name": "Left Popliteus",
    "rawMeshName": "left popliteus",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Popliteus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_posterior_crico_arytenoid",
    "name": "Left Posterior Crico-Arytenoid",
    "rawMeshName": "left posterior crico-arytenoid",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Posterior Crico-Arytenoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_pronator_quadratus",
    "name": "Left Pronator Quadratus",
    "rawMeshName": "left pronator quadratus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Pronator Quadratus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_psoas_major",
    "name": "Left Psoas Major",
    "rawMeshName": "left psoas major",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Psoas Major) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_pubococcygeus",
    "name": "Left Pubococcygeus",
    "rawMeshName": "left pubococcygeus",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Pubococcygeus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_pubococcygeus__2_",
    "name": "Left Pubococcygeus (2)",
    "rawMeshName": "left pubococcygeus (2)",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Pubococcygeus (2)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_puborectalis",
    "name": "Left Puborectalis",
    "rawMeshName": "left puborectalis",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Puborectalis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_puborectalis__2_",
    "name": "Left Puborectalis (2)",
    "rawMeshName": "left puborectalis (2)",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Puborectalis (2)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_quadratus_femoris",
    "name": "Left Quadratus Femoris",
    "rawMeshName": "left quadratus femoris",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Quadratus Femoris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_rectus_capitis_anterior",
    "name": "Left Rectus Capitis Anterior",
    "rawMeshName": "left rectus capitis anterior",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Rectus Capitis Anterior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_rectus_capitis_lateralis",
    "name": "Left Rectus Capitis Lateralis",
    "rawMeshName": "left rectus capitis lateralis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Rectus Capitis Lateralis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_rectus_capitis_posterior_major",
    "name": "Left Rectus Capitis Posterior Major",
    "rawMeshName": "left rectus capitis posterior major",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Rectus Capitis Posterior Major) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_rectus_capitis_posterior_minor",
    "name": "Left Rectus Capitis Posterior Minor",
    "rawMeshName": "left rectus capitis posterior minor",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Rectus Capitis Posterior Minor) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_rectus_femoris",
    "name": "Left Rectus Femoris",
    "rawMeshName": "left rectus femoris",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Anterior inferior iliac spine (AIIS) and superior groove to acetabulum.",
    "insertion": "Base of patella and via patellar ligament to tibial tuberosity.",
    "action": "Extends the leg at the knee joint and flexes the thigh at the hip joint.",
    "innervation": "Femoral nerve (L2, L3, L4).",
    "arterialSupply": "Lateral circumflex femoral artery.",
    "description": "Bipennate quadriceps muscle spanning both the hip and knee joints as a bi-articular prime mover."
  },
  {
    "id": "muscle_left_rhomboid_major",
    "name": "Left Rhomboid Major",
    "rawMeshName": "left rhomboid major",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Rhomboid Major) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_rhomboid_minor",
    "name": "Left Rhomboid Minor",
    "rawMeshName": "left rhomboid minor",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Rhomboid Minor) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_sartorius",
    "name": "Left Sartorius",
    "rawMeshName": "left sartorius",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Sartorius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_scalenus_anterior",
    "name": "Left Scalenus Anterior",
    "rawMeshName": "left scalenus anterior",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Scalenus Anterior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_scalenus_medius",
    "name": "Left Scalenus Medius",
    "rawMeshName": "left scalenus medius",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Scalenus Medius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_scalenus_posterior",
    "name": "Left Scalenus Posterior",
    "rawMeshName": "left scalenus posterior",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Scalenus Posterior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_semimembranosus",
    "name": "Left Semimembranosus",
    "rawMeshName": "left semimembranosus",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Semimembranosus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_semispinalis_capitis",
    "name": "Left Semispinalis Capitis",
    "rawMeshName": "left semispinalis capitis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Semispinalis Capitis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_semispinalis_cervicis",
    "name": "Left Semispinalis Cervicis",
    "rawMeshName": "left semispinalis cervicis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Semispinalis Cervicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_semispinalis_thoracis",
    "name": "Left Semispinalis Thoracis",
    "rawMeshName": "left semispinalis thoracis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Semispinalis Thoracis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_semitendinosus",
    "name": "Left Semitendinosus",
    "rawMeshName": "left semitendinosus",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Semitendinosus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_serratus_anterior",
    "name": "Left Serratus Anterior",
    "rawMeshName": "left serratus anterior",
    "type": "muscle",
    "region": "Thorax",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Serratus Anterior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_serratus_posterior_inferior",
    "name": "Left Serratus Posterior Inferior",
    "rawMeshName": "left serratus posterior inferior",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Serratus Posterior Inferior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_serratus_posterior_superior",
    "name": "Left Serratus Posterior Superior",
    "rawMeshName": "left serratus posterior superior",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Serratus Posterior Superior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_soleus",
    "name": "Left Soleus",
    "rawMeshName": "left soleus",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Soleus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_spinalis_thoracis",
    "name": "Left Spinalis Thoracis",
    "rawMeshName": "left spinalis thoracis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Spinalis Thoracis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_splenius_capitis",
    "name": "Left Splenius Capitis",
    "rawMeshName": "left splenius capitis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Splenius Capitis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_splenius_cervicis",
    "name": "Left Splenius Cervicis",
    "rawMeshName": "left splenius cervicis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Splenius Cervicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_sternocleidomastoid",
    "name": "Left Sternocleidomastoid",
    "rawMeshName": "left sternocleidomastoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Sternal head: manubrium sterni; Clavicular head: medial third of the clavicle.",
    "insertion": "Mastoid process of the temporal bone and superior nuchal line of the occipital bone.",
    "action": "Unilateral: tilts head to same side and rotates chin to opposite side; Bilateral: flexes cervical spine.",
    "innervation": "Spinal accessory nerve (CN XI) and anterior rami of C2-C3.",
    "arterialSupply": "Occipital artery and superior thyroid artery.",
    "description": "Prominent landmark muscle of the anterior and lateral neck dividing the anterior and posterior cervical triangles."
  },
  {
    "id": "muscle_left_sternohyoid",
    "name": "Left Sternohyoid",
    "rawMeshName": "left sternohyoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Sternohyoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_sternothyroid",
    "name": "Left Sternothyroid",
    "rawMeshName": "left sternothyroid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Sternothyroid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_stylohyoid",
    "name": "Left Stylohyoid",
    "rawMeshName": "left stylohyoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Stylohyoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_subclavius",
    "name": "Left Subclavius",
    "rawMeshName": "left subclavius",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Subclavius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_subscapularis",
    "name": "Left Subscapularis",
    "rawMeshName": "left subscapularis",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Subscapularis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_superior_oblique",
    "name": "Left Superior Oblique",
    "rawMeshName": "left superior oblique",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Superior Oblique) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_superior_rectus",
    "name": "Left Superior Rectus",
    "rawMeshName": "left superior rectus",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Superior Rectus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_supinator",
    "name": "Left Supinator",
    "rawMeshName": "left supinator",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Supinator) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_supraspinatus",
    "name": "Left Supraspinatus",
    "rawMeshName": "left supraspinatus",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Supraspinatus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_tensor_fasciae_latae",
    "name": "Left Tensor Fasciae Latae",
    "rawMeshName": "left tensor fasciae latae",
    "type": "tendon_ligament",
    "region": "Gluteal Region & Hip",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Tensor Fasciae Latae) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_tensor_veli_palatini",
    "name": "Left Tensor Veli Palatini",
    "rawMeshName": "left tensor veli palatini",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Tensor Veli Palatini) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_teres_major",
    "name": "Left Teres Major",
    "rawMeshName": "left teres major",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Teres Major) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_teres_minor",
    "name": "Left Teres Minor",
    "rawMeshName": "left teres minor",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Teres Minor) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_thyro_arytenoid",
    "name": "Left Thyro-Arytenoid",
    "rawMeshName": "left thyro-arytenoid",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Thyro-Arytenoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_thyro_arytenoid__2_",
    "name": "Left Thyro-Arytenoid (2)",
    "rawMeshName": "left thyro-arytenoid (2)",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Thyro-Arytenoid (2)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_thyrohyoid",
    "name": "Left Thyrohyoid",
    "rawMeshName": "left thyrohyoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Thyrohyoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_tibialis_anterior",
    "name": "Left Tibialis Anterior",
    "rawMeshName": "left tibialis anterior",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Tibialis Anterior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_tibialis_posterior",
    "name": "Left Tibialis Posterior",
    "rawMeshName": "left tibialis posterior",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Tibialis Posterior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_transversus_thoracis",
    "name": "Left Transversus Thoracis",
    "rawMeshName": "left transversus thoracis",
    "type": "muscle",
    "region": "Thorax",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Transversus Thoracis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_vastus_intermedius",
    "name": "Left Vastus Intermedius",
    "rawMeshName": "left vastus intermedius",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Vastus Intermedius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_vastus_lateralis",
    "name": "Left Vastus Lateralis",
    "rawMeshName": "left vastus lateralis",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Vastus Lateralis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_vastus_medialis",
    "name": "Left Vastus Medialis",
    "rawMeshName": "left vastus medialis",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Vastus Medialis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_long_head_of_left_biceps_brachii",
    "name": "Long Head Of Left Biceps Brachii",
    "rawMeshName": "long head of left biceps brachii",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Long head: supraglenoid tubercle of scapula; Short head: coracoid process of scapula.",
    "insertion": "Radial tuberosity and bicipital aponeurosis into deep fascia of forearm.",
    "action": "Powerful supinator of the forearm; powerful flexor of the elbow joint; assists shoulder flexion.",
    "innervation": "Musculocutaneous nerve (C5, C6).",
    "arterialSupply": "Muscular branches of the brachial artery.",
    "description": "Two-headed anterior arm muscle serving as the primary kinetic driver for forearm supination and elbow flexion."
  },
  {
    "id": "muscle_long_head_of_left_biceps_femoris",
    "name": "Long Head Of Left Biceps Femoris",
    "rawMeshName": "long head of left biceps femoris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Long Head Of Left Biceps Femoris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_long_head_of_left_triceps_brachii",
    "name": "Long Head Of Left Triceps Brachii",
    "rawMeshName": "long head of left triceps brachii",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Long head: infraglenoid tubercle; Lateral head: posterior humerus above radial groove; Medial head: posterior humerus below radial groove.",
    "insertion": "Olecranon process of the ulna.",
    "action": "Primary extensor of the elbow joint; long head stabilizes abducted shoulder.",
    "innervation": "Radial nerve (C6-C8).",
    "arterialSupply": "Deep brachial (profunda brachii) artery and posterior circumflex humeral artery.",
    "description": "Three-headed posterior arm muscle delivering total extension torque across the humero-ulnar articulation."
  },
  {
    "id": "muscle_long_head_of_right_biceps_brachii",
    "name": "Long Head Of Right Biceps Brachii",
    "rawMeshName": "long head of right biceps brachii",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Long head: supraglenoid tubercle of scapula; Short head: coracoid process of scapula.",
    "insertion": "Radial tuberosity and bicipital aponeurosis into deep fascia of forearm.",
    "action": "Powerful supinator of the forearm; powerful flexor of the elbow joint; assists shoulder flexion.",
    "innervation": "Musculocutaneous nerve (C5, C6).",
    "arterialSupply": "Muscular branches of the brachial artery.",
    "description": "Two-headed anterior arm muscle serving as the primary kinetic driver for forearm supination and elbow flexion."
  },
  {
    "id": "muscle_long_head_of_right_biceps_femoris",
    "name": "Long Head Of Right Biceps Femoris",
    "rawMeshName": "long head of right biceps femoris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Long Head Of Right Biceps Femoris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_long_head_of_right_triceps_brachii",
    "name": "Long Head Of Right Triceps Brachii",
    "rawMeshName": "long head of right triceps brachii",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Long head: infraglenoid tubercle; Lateral head: posterior humerus above radial groove; Medial head: posterior humerus below radial groove.",
    "insertion": "Olecranon process of the ulna.",
    "action": "Primary extensor of the elbow joint; long head stabilizes abducted shoulder.",
    "innervation": "Radial nerve (C6-C8).",
    "arterialSupply": "Deep brachial (profunda brachii) artery and posterior circumflex humeral artery.",
    "description": "Three-headed posterior arm muscle delivering total extension torque across the humero-ulnar articulation."
  },
  {
    "id": "muscle_medial_head_of_left_flexor_hallucis_brevis",
    "name": "Medial Head Of Left Flexor Hallucis Brevis",
    "rawMeshName": "medial head of left flexor hallucis brevis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Medial Head Of Left Flexor Hallucis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_medial_head_of_left_gastrocnemius",
    "name": "Medial Head Of Left Gastrocnemius",
    "rawMeshName": "medial head of left gastrocnemius",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Medial head: medial condyle of femur; Lateral head: lateral condyle of femur.",
    "insertion": "Posterior surface of calcaneus via the calcaneal (Achilles) tendon.",
    "action": "Plantarflexes the foot at the talocrural ankle joint and assists in knee flexion.",
    "innervation": "Tibial nerve (S1, S2).",
    "arterialSupply": "Sural branches of the popliteal artery.",
    "description": "Prominent two-bellied superficial calf muscle generating powerful ground-reaction propulsion during sprinting and jumping."
  },
  {
    "id": "muscle_medial_head_of_left_triceps_brachii",
    "name": "Medial Head Of Left Triceps Brachii",
    "rawMeshName": "medial head of left triceps brachii",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Long head: infraglenoid tubercle; Lateral head: posterior humerus above radial groove; Medial head: posterior humerus below radial groove.",
    "insertion": "Olecranon process of the ulna.",
    "action": "Primary extensor of the elbow joint; long head stabilizes abducted shoulder.",
    "innervation": "Radial nerve (C6-C8).",
    "arterialSupply": "Deep brachial (profunda brachii) artery and posterior circumflex humeral artery.",
    "description": "Three-headed posterior arm muscle delivering total extension torque across the humero-ulnar articulation."
  },
  {
    "id": "muscle_medial_head_of_right_flexor_hallucis_brevis",
    "name": "Medial Head Of Right Flexor Hallucis Brevis",
    "rawMeshName": "medial head of right flexor hallucis brevis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Medial Head Of Right Flexor Hallucis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_medial_head_of_right_gastrocnemius",
    "name": "Medial Head Of Right Gastrocnemius",
    "rawMeshName": "medial head of right gastrocnemius",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Medial head: medial condyle of femur; Lateral head: lateral condyle of femur.",
    "insertion": "Posterior surface of calcaneus via the calcaneal (Achilles) tendon.",
    "action": "Plantarflexes the foot at the talocrural ankle joint and assists in knee flexion.",
    "innervation": "Tibial nerve (S1, S2).",
    "arterialSupply": "Sural branches of the popliteal artery.",
    "description": "Prominent two-bellied superficial calf muscle generating powerful ground-reaction propulsion during sprinting and jumping."
  },
  {
    "id": "muscle_medial_head_of_right_triceps_brachii",
    "name": "Medial Head Of Right Triceps Brachii",
    "rawMeshName": "medial head of right triceps brachii",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Long head: infraglenoid tubercle; Lateral head: posterior humerus above radial groove; Medial head: posterior humerus below radial groove.",
    "insertion": "Olecranon process of the ulna.",
    "action": "Primary extensor of the elbow joint; long head stabilizes abducted shoulder.",
    "innervation": "Radial nerve (C6-C8).",
    "arterialSupply": "Deep brachial (profunda brachii) artery and posterior circumflex humeral artery.",
    "description": "Three-headed posterior arm muscle delivering total extension torque across the humero-ulnar articulation."
  },
  {
    "id": "muscle_medial_lumbar_intertransversarius",
    "name": "Medial Lumbar Intertransversarius",
    "rawMeshName": "medial lumbar intertransversarius",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Medial Lumbar Intertransversarius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_median_cricothyroid_ligament",
    "name": "Median Cricothyroid Ligament",
    "rawMeshName": "median cricothyroid ligament",
    "type": "tendon_ligament",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Median Cricothyroid Ligament) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_oblique_head_of_left_adductor_hallucis",
    "name": "Oblique Head Of Left Adductor Hallucis",
    "rawMeshName": "oblique head of left adductor hallucis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Oblique Head Of Left Adductor Hallucis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_oblique_head_of_left_adductor_pollicis",
    "name": "Oblique Head Of Left Adductor Pollicis",
    "rawMeshName": "oblique head of left adductor pollicis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Oblique Head Of Left Adductor Pollicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_oblique_head_of_right_adductor_hallucis",
    "name": "Oblique Head Of Right Adductor Hallucis",
    "rawMeshName": "oblique head of right adductor hallucis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Oblique Head Of Right Adductor Hallucis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_oblique_head_of_right_adductor_pollicis",
    "name": "Oblique Head Of Right Adductor Pollicis",
    "rawMeshName": "oblique head of right adductor pollicis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Oblique Head Of Right Adductor Pollicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_oblique_part_of_left_cricothyroid",
    "name": "Oblique Part Of Left Cricothyroid",
    "rawMeshName": "oblique part of left cricothyroid",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Oblique Part Of Left Cricothyroid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_oblique_part_of_right_cricothyroid",
    "name": "Oblique Part Of Right Cricothyroid",
    "rawMeshName": "oblique part of right cricothyroid",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Oblique Part Of Right Cricothyroid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_opponens_digiti_minimi_of_left_foot",
    "name": "Opponens Digiti Minimi Of Left Foot",
    "rawMeshName": "opponens digiti minimi of left foot",
    "type": "muscle",
    "region": "Hand",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Opponens Digiti Minimi Of Left Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_opponens_digiti_minimi_of_left_hand",
    "name": "Opponens Digiti Minimi Of Left Hand",
    "rawMeshName": "opponens digiti minimi of left hand",
    "type": "muscle",
    "region": "Hand",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Opponens Digiti Minimi Of Left Hand) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_opponens_digiti_minimi_of_right_foot",
    "name": "Opponens Digiti Minimi Of Right Foot",
    "rawMeshName": "opponens digiti minimi of right foot",
    "type": "muscle",
    "region": "Hand",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Opponens Digiti Minimi Of Right Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_opponens_digiti_minimi_of_right_hand",
    "name": "Opponens Digiti Minimi Of Right Hand",
    "rawMeshName": "opponens digiti minimi of right hand",
    "type": "muscle",
    "region": "Hand",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Opponens Digiti Minimi Of Right Hand) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_abductor_hallucis",
    "name": "Right Abductor Hallucis",
    "rawMeshName": "right abductor hallucis",
    "type": "muscle",
    "region": "Foot",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Abductor Hallucis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_abductor_pollicis_brevis",
    "name": "Right Abductor Pollicis Brevis",
    "rawMeshName": "right abductor pollicis brevis",
    "type": "muscle",
    "region": "Hand",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Abductor Pollicis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_abductor_pollicis_longus",
    "name": "Right Abductor Pollicis Longus",
    "rawMeshName": "right abductor pollicis longus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Abductor Pollicis Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_adductor_brevis",
    "name": "Right Adductor Brevis",
    "rawMeshName": "right adductor brevis",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Adductor Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_adductor_longus",
    "name": "Right Adductor Longus",
    "rawMeshName": "right adductor longus",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Adductor Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_adductor_magnus",
    "name": "Right Adductor Magnus",
    "rawMeshName": "right adductor magnus",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Adductor Magnus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_adductor_minimus",
    "name": "Right Adductor Minimus",
    "rawMeshName": "right adductor minimus",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Adductor Minimus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_anconeus",
    "name": "Right Anconeus",
    "rawMeshName": "right anconeus",
    "type": "muscle",
    "region": "Arm & Elbow",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Anconeus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_arytenoid_cartilage",
    "name": "Right Arytenoid Cartilage",
    "rawMeshName": "right arytenoid cartilage",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Arytenoid Cartilage) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_brachialis",
    "name": "Right Brachialis",
    "rawMeshName": "right brachialis",
    "type": "muscle",
    "region": "Arm & Elbow",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Brachialis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_brachioradialis",
    "name": "Right Brachioradialis",
    "rawMeshName": "right brachioradialis",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Brachioradialis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_calcaneal_tendon",
    "name": "Right Calcaneal Tendon",
    "rawMeshName": "right calcaneal tendon",
    "type": "tendon_ligament",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Calcaneal Tendon) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_coccygeus",
    "name": "Right Coccygeus",
    "rawMeshName": "right coccygeus",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Coccygeus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_coracobrachialis",
    "name": "Right Coracobrachialis",
    "rawMeshName": "right coracobrachialis",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Coracobrachialis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_digastric",
    "name": "Right Digastric",
    "rawMeshName": "right digastric",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Digastric) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_digastric__2_",
    "name": "Right Digastric (2)",
    "rawMeshName": "right digastric (2)",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Digastric (2)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_extensor_carpi_radialis_brevis",
    "name": "Right Extensor Carpi Radialis Brevis",
    "rawMeshName": "right extensor carpi radialis brevis",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Extensor Carpi Radialis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_extensor_carpi_radialis_longus",
    "name": "Right Extensor Carpi Radialis Longus",
    "rawMeshName": "right extensor carpi radialis longus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Extensor Carpi Radialis Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_extensor_carpi_ulnaris",
    "name": "Right Extensor Carpi Ulnaris",
    "rawMeshName": "right extensor carpi ulnaris",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Extensor Carpi Ulnaris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_extensor_carpi_ulnaris__2_",
    "name": "Right Extensor Carpi Ulnaris (2)",
    "rawMeshName": "right extensor carpi ulnaris (2)",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Extensor Carpi Ulnaris (2)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_extensor_digiti_minimi",
    "name": "Right Extensor Digiti Minimi",
    "rawMeshName": "right extensor digiti minimi",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Extensor Digiti Minimi) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_extensor_digitorum",
    "name": "Right Extensor Digitorum",
    "rawMeshName": "right extensor digitorum",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Extensor Digitorum) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_extensor_digitorum_longus",
    "name": "Right Extensor Digitorum Longus",
    "rawMeshName": "right extensor digitorum longus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Extensor Digitorum Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_extensor_hallucis_brevis",
    "name": "Right Extensor Hallucis Brevis",
    "rawMeshName": "right extensor hallucis brevis",
    "type": "muscle",
    "region": "Foot",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Extensor Hallucis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_extensor_hallucis_longus",
    "name": "Right Extensor Hallucis Longus",
    "rawMeshName": "right extensor hallucis longus",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Extensor Hallucis Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_extensor_indicis",
    "name": "Right Extensor Indicis",
    "rawMeshName": "right extensor indicis",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Extensor Indicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_extensor_pollicis_brevis",
    "name": "Right Extensor Pollicis Brevis",
    "rawMeshName": "right extensor pollicis brevis",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Extensor Pollicis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_extensor_pollicis_longus",
    "name": "Right Extensor Pollicis Longus",
    "rawMeshName": "right extensor pollicis longus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Extensor Pollicis Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_external_oblique",
    "name": "Right External Oblique",
    "rawMeshName": "right external oblique",
    "type": "muscle",
    "region": "Abdomen",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right External Oblique) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_fibularis_brevis",
    "name": "Right Fibularis Brevis",
    "rawMeshName": "right fibularis brevis",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Fibularis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_fibularis_longus",
    "name": "Right Fibularis Longus",
    "rawMeshName": "right fibularis longus",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Fibularis Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_fibularis_tertius",
    "name": "Right Fibularis Tertius",
    "rawMeshName": "right fibularis tertius",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Fibularis Tertius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_flexor_accessorius",
    "name": "Right Flexor Accessorius",
    "rawMeshName": "right flexor accessorius",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Flexor Accessorius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_flexor_carpi_radialis",
    "name": "Right Flexor Carpi Radialis",
    "rawMeshName": "right flexor carpi radialis",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Flexor Carpi Radialis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_flexor_digitorum_brevis",
    "name": "Right Flexor Digitorum Brevis",
    "rawMeshName": "right flexor digitorum brevis",
    "type": "muscle",
    "region": "Foot",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Flexor Digitorum Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_flexor_digitorum_longus",
    "name": "Right Flexor Digitorum Longus",
    "rawMeshName": "right flexor digitorum longus",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Flexor Digitorum Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_flexor_digitorum_profundus",
    "name": "Right Flexor Digitorum Profundus",
    "rawMeshName": "right flexor digitorum profundus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Flexor Digitorum Profundus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_flexor_digitorum_superficialis",
    "name": "Right Flexor Digitorum Superficialis",
    "rawMeshName": "right flexor digitorum superficialis",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Flexor Digitorum Superficialis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_flexor_digitorum_superficialis__2_",
    "name": "Right Flexor Digitorum Superficialis (2)",
    "rawMeshName": "right flexor digitorum superficialis (2)",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Flexor Digitorum Superficialis (2)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_flexor_hallucis_longus",
    "name": "Right Flexor Hallucis Longus",
    "rawMeshName": "right flexor hallucis longus",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Flexor Hallucis Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_flexor_pollicis_brevis",
    "name": "Right Flexor Pollicis Brevis",
    "rawMeshName": "right flexor pollicis brevis",
    "type": "muscle",
    "region": "Hand",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Flexor Pollicis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_flexor_pollicis_longus",
    "name": "Right Flexor Pollicis Longus",
    "rawMeshName": "right flexor pollicis longus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Flexor Pollicis Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_gemellus_inferior",
    "name": "Right Gemellus Inferior",
    "rawMeshName": "right gemellus inferior",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Gemellus Inferior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_gemellus_superior",
    "name": "Right Gemellus Superior",
    "rawMeshName": "right gemellus superior",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Gemellus Superior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_geniohyoid",
    "name": "Right Geniohyoid",
    "rawMeshName": "right geniohyoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Geniohyoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_gluteus_maximus",
    "name": "Right Gluteus Maximus",
    "rawMeshName": "right gluteus maximus",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "superficial",
    "origin": "Outer slope of dorsal ilium behind posterior gluteal line, sacrum, coccyx, and sacrotuberous ligament.",
    "insertion": "Iliotibial tract and gluteal tuberosity of the femur.",
    "action": "Powerful extensor and lateral rotator of the hip joint; steadies the pelvis on the femur during upright posture.",
    "innervation": "Inferior gluteal nerve (L5, S1, S2).",
    "arterialSupply": "Superior and inferior gluteal arteries.",
    "description": "The largest, heaviest, and most powerful muscle in the human body, vital for bipedal erect stance, climbing, and running."
  },
  {
    "id": "muscle_right_gluteus_medius",
    "name": "Right Gluteus Medius",
    "rawMeshName": "right gluteus medius",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "superficial",
    "origin": "Outer surface of the ilium between the anterior and posterior gluteal lines.",
    "insertion": "Lateral surface of the greater trochanter of the femur.",
    "action": "Abducts and medially rotates the hip; prevents pelvic drop on the contralateral side during single-leg stance.",
    "innervation": "Superior gluteal nerve (L4, L5, S1).",
    "arterialSupply": "Superior gluteal artery and deep branch.",
    "description": "Crucial fan-shaped lateral pelvic stabilizer maintaining coronal plane equilibrium during the gait cycle."
  },
  {
    "id": "muscle_right_gluteus_minimus",
    "name": "Right Gluteus Minimus",
    "rawMeshName": "right gluteus minimus",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Gluteus Minimus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_gracilis",
    "name": "Right Gracilis",
    "rawMeshName": "right gracilis",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Gracilis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_iliacus",
    "name": "Right Iliacus",
    "rawMeshName": "right iliacus",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Iliacus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_iliococcygeus",
    "name": "Right Iliococcygeus",
    "rawMeshName": "right iliococcygeus",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Iliococcygeus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_iliocostalis_cervicis",
    "name": "Right Iliocostalis Cervicis",
    "rawMeshName": "right iliocostalis cervicis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Iliocostalis Cervicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_iliocostalis_lumborum",
    "name": "Right Iliocostalis Lumborum",
    "rawMeshName": "right iliocostalis lumborum",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Iliocostalis Lumborum) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_iliocostalis_thoracis",
    "name": "Right Iliocostalis Thoracis",
    "rawMeshName": "right iliocostalis thoracis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Iliocostalis Thoracis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_inferior_oblique",
    "name": "Right Inferior Oblique",
    "rawMeshName": "right inferior oblique",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Inferior Oblique) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_inferior_rectus",
    "name": "Right Inferior Rectus",
    "rawMeshName": "right inferior rectus",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Inferior Rectus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_infraspinatus_muscle",
    "name": "Right Infraspinatus Muscle",
    "rawMeshName": "right infraspinatus muscle",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Infraspinatus Muscle) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_intermediate_tendon",
    "name": "Right Intermediate Tendon",
    "rawMeshName": "right intermediate tendon",
    "type": "tendon_ligament",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Intermediate Tendon) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_interspinalis_thoracis",
    "name": "Right Interspinalis Thoracis",
    "rawMeshName": "right interspinalis thoracis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Interspinalis Thoracis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_lateral_crico_arytenoid",
    "name": "Right Lateral Crico-Arytenoid",
    "rawMeshName": "right lateral crico-arytenoid",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Lateral Crico-Arytenoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_lateral_rectus",
    "name": "Right Lateral Rectus",
    "rawMeshName": "right lateral rectus",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Lateral Rectus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_levator_palpebrae_superioris",
    "name": "Right Levator Palpebrae Superioris",
    "rawMeshName": "right levator palpebrae superioris",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Levator Palpebrae Superioris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_levator_scapulae",
    "name": "Right Levator Scapulae",
    "rawMeshName": "right levator scapulae",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Levator Scapulae) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_levator_veli_palatini",
    "name": "Right Levator Veli Palatini",
    "rawMeshName": "right levator veli palatini",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Levator Veli Palatini) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_long_plantar_ligament",
    "name": "Right Long Plantar Ligament",
    "rawMeshName": "right long plantar ligament",
    "type": "tendon_ligament",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Long Plantar Ligament) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_longissimus_capitis",
    "name": "Right Longissimus Capitis",
    "rawMeshName": "right longissimus capitis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Longissimus Capitis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_longissimus_cervicis",
    "name": "Right Longissimus Cervicis",
    "rawMeshName": "right longissimus cervicis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Longissimus Cervicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_longissimus_thoracis",
    "name": "Right Longissimus Thoracis",
    "rawMeshName": "right longissimus thoracis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Longissimus Thoracis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_longus_capitis",
    "name": "Right Longus Capitis",
    "rawMeshName": "right longus capitis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Longus Capitis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_medial_rectus",
    "name": "Right Medial Rectus",
    "rawMeshName": "right medial rectus",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Medial Rectus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_mylohyoid",
    "name": "Right Mylohyoid",
    "rawMeshName": "right mylohyoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Mylohyoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_oblique_arytenoid",
    "name": "Right Oblique Arytenoid",
    "rawMeshName": "right oblique arytenoid",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Oblique Arytenoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_obturator_externus",
    "name": "Right Obturator Externus",
    "rawMeshName": "right obturator externus",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Obturator Externus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_obturator_internus",
    "name": "Right Obturator Internus",
    "rawMeshName": "right obturator internus",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Obturator Internus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_omohyoid",
    "name": "Right Omohyoid",
    "rawMeshName": "right omohyoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Omohyoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_opponens_pollicis",
    "name": "Right Opponens Pollicis",
    "rawMeshName": "right opponens pollicis",
    "type": "muscle",
    "region": "Hand",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Opponens Pollicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_palmaris_longus",
    "name": "Right Palmaris Longus",
    "rawMeshName": "right palmaris longus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Palmaris Longus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_pectineus",
    "name": "Right Pectineus",
    "rawMeshName": "right pectineus",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Pectineus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_pectoralis_minor",
    "name": "Right Pectoralis Minor",
    "rawMeshName": "right pectoralis minor",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Pectoralis Minor) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_piriformis",
    "name": "Right Piriformis",
    "rawMeshName": "right piriformis",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Piriformis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_plantaris",
    "name": "Right Plantaris",
    "rawMeshName": "right plantaris",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Plantaris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_platysma",
    "name": "Right Platysma",
    "rawMeshName": "right platysma",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Platysma) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_popliteus",
    "name": "Right Popliteus",
    "rawMeshName": "right popliteus",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Popliteus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_posterior_crico_arytenoid",
    "name": "Right Posterior Crico-Arytenoid",
    "rawMeshName": "right posterior crico-arytenoid",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Posterior Crico-Arytenoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_pronator_quadratus",
    "name": "Right Pronator Quadratus",
    "rawMeshName": "right pronator quadratus",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Pronator Quadratus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_psoas_major",
    "name": "Right Psoas Major",
    "rawMeshName": "right psoas major",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Psoas Major) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_pubococcygeus",
    "name": "Right Pubococcygeus",
    "rawMeshName": "right pubococcygeus",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Pubococcygeus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_puborectalis",
    "name": "Right Puborectalis",
    "rawMeshName": "right puborectalis",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Puborectalis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_quadratus_femoris",
    "name": "Right Quadratus Femoris",
    "rawMeshName": "right quadratus femoris",
    "type": "muscle",
    "region": "Gluteal Region & Hip",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Quadratus Femoris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_rectus_capitis_anterior",
    "name": "Right Rectus Capitis Anterior",
    "rawMeshName": "right rectus capitis anterior",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Rectus Capitis Anterior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_rectus_capitis_lateralis",
    "name": "Right Rectus Capitis Lateralis",
    "rawMeshName": "right rectus capitis lateralis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Rectus Capitis Lateralis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_rectus_capitis_posterior_major",
    "name": "Right Rectus Capitis Posterior Major",
    "rawMeshName": "right rectus capitis posterior major",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Rectus Capitis Posterior Major) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_rectus_capitis_posterior_minor",
    "name": "Right Rectus Capitis Posterior Minor",
    "rawMeshName": "right rectus capitis posterior minor",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Rectus Capitis Posterior Minor) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_rectus_femoris",
    "name": "Right Rectus Femoris",
    "rawMeshName": "right rectus femoris",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Anterior inferior iliac spine (AIIS) and superior groove to acetabulum.",
    "insertion": "Base of patella and via patellar ligament to tibial tuberosity.",
    "action": "Extends the leg at the knee joint and flexes the thigh at the hip joint.",
    "innervation": "Femoral nerve (L2, L3, L4).",
    "arterialSupply": "Lateral circumflex femoral artery.",
    "description": "Bipennate quadriceps muscle spanning both the hip and knee joints as a bi-articular prime mover."
  },
  {
    "id": "muscle_right_rhomboid_major",
    "name": "Right Rhomboid Major",
    "rawMeshName": "right rhomboid major",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Rhomboid Major) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_rhomboid_minor",
    "name": "Right Rhomboid Minor",
    "rawMeshName": "right rhomboid minor",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Rhomboid Minor) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_sartorius",
    "name": "Right Sartorius",
    "rawMeshName": "right sartorius",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Sartorius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_scalenus_anterior",
    "name": "Right Scalenus Anterior",
    "rawMeshName": "right scalenus anterior",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Scalenus Anterior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_scalenus_medius",
    "name": "Right Scalenus Medius",
    "rawMeshName": "right scalenus medius",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Scalenus Medius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_scalenus_posterior",
    "name": "Right Scalenus Posterior",
    "rawMeshName": "right scalenus posterior",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Scalenus Posterior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_semimembranosus",
    "name": "Right Semimembranosus",
    "rawMeshName": "right semimembranosus",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Semimembranosus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_semispinalis_capitis",
    "name": "Right Semispinalis Capitis",
    "rawMeshName": "right semispinalis capitis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Semispinalis Capitis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_semispinalis_cervicis",
    "name": "Right Semispinalis Cervicis",
    "rawMeshName": "right semispinalis cervicis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Semispinalis Cervicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_semispinalis_thoracis",
    "name": "Right Semispinalis Thoracis",
    "rawMeshName": "right semispinalis thoracis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Semispinalis Thoracis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_semitendinosus",
    "name": "Right Semitendinosus",
    "rawMeshName": "right semitendinosus",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Semitendinosus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_serratus_anterior",
    "name": "Right Serratus Anterior",
    "rawMeshName": "right serratus anterior",
    "type": "muscle",
    "region": "Thorax",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Serratus Anterior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_serratus_posterior_inferior",
    "name": "Right Serratus Posterior Inferior",
    "rawMeshName": "right serratus posterior inferior",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Serratus Posterior Inferior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_serratus_posterior_superior",
    "name": "Right Serratus Posterior Superior",
    "rawMeshName": "right serratus posterior superior",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Serratus Posterior Superior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_soleus",
    "name": "Right Soleus",
    "rawMeshName": "right soleus",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Soleus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_spinalis_thoracis",
    "name": "Right Spinalis Thoracis",
    "rawMeshName": "right spinalis thoracis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Spinalis Thoracis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_splenius_capitis",
    "name": "Right Splenius Capitis",
    "rawMeshName": "right splenius capitis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Splenius Capitis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_splenius_cervicis",
    "name": "Right Splenius Cervicis",
    "rawMeshName": "right splenius cervicis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Splenius Cervicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_sternocleidomastoid",
    "name": "Right Sternocleidomastoid",
    "rawMeshName": "right sternocleidomastoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Sternal head: manubrium sterni; Clavicular head: medial third of the clavicle.",
    "insertion": "Mastoid process of the temporal bone and superior nuchal line of the occipital bone.",
    "action": "Unilateral: tilts head to same side and rotates chin to opposite side; Bilateral: flexes cervical spine.",
    "innervation": "Spinal accessory nerve (CN XI) and anterior rami of C2-C3.",
    "arterialSupply": "Occipital artery and superior thyroid artery.",
    "description": "Prominent landmark muscle of the anterior and lateral neck dividing the anterior and posterior cervical triangles."
  },
  {
    "id": "muscle_right_sternohyoid",
    "name": "Right Sternohyoid",
    "rawMeshName": "right sternohyoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Sternohyoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_sternothyroid",
    "name": "Right Sternothyroid",
    "rawMeshName": "right sternothyroid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Sternothyroid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_stylohyoid",
    "name": "Right Stylohyoid",
    "rawMeshName": "right stylohyoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Stylohyoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_subclavius",
    "name": "Right Subclavius",
    "rawMeshName": "right subclavius",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Subclavius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_subscapularis",
    "name": "Right Subscapularis",
    "rawMeshName": "right subscapularis",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Subscapularis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_superior_oblique",
    "name": "Right Superior Oblique",
    "rawMeshName": "right superior oblique",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Superior Oblique) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_superior_rectus",
    "name": "Right Superior Rectus",
    "rawMeshName": "right superior rectus",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Superior Rectus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_supinator",
    "name": "Right Supinator",
    "rawMeshName": "right supinator",
    "type": "muscle",
    "region": "Forearm & Wrist",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Supinator) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_supraspinatus",
    "name": "Right Supraspinatus",
    "rawMeshName": "right supraspinatus",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Supraspinatus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_tensor_fasciae_latae",
    "name": "Right Tensor Fasciae Latae",
    "rawMeshName": "right tensor fasciae latae",
    "type": "tendon_ligament",
    "region": "Gluteal Region & Hip",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Tensor Fasciae Latae) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_tensor_veli_palatini",
    "name": "Right Tensor Veli Palatini",
    "rawMeshName": "right tensor veli palatini",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Tensor Veli Palatini) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_teres_major",
    "name": "Right Teres Major",
    "rawMeshName": "right teres major",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Teres Major) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_teres_minor",
    "name": "Right Teres Minor",
    "rawMeshName": "right teres minor",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Teres Minor) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_thyro_arytenoid",
    "name": "Right Thyro-Arytenoid",
    "rawMeshName": "right thyro-arytenoid",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Thyro-Arytenoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_thyro_arytenoid__2_",
    "name": "Right Thyro-Arytenoid (2)",
    "rawMeshName": "right thyro-arytenoid (2)",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Thyro-Arytenoid (2)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_thyrohyoid",
    "name": "Right Thyrohyoid",
    "rawMeshName": "right thyrohyoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Thyrohyoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_tibialis_anterior",
    "name": "Right Tibialis Anterior",
    "rawMeshName": "right tibialis anterior",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Tibialis Anterior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_tibialis_posterior",
    "name": "Right Tibialis Posterior",
    "rawMeshName": "right tibialis posterior",
    "type": "muscle",
    "region": "Leg & Ankle",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Tibialis Posterior) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_transversus_thoracis",
    "name": "Right Transversus Thoracis",
    "rawMeshName": "right transversus thoracis",
    "type": "muscle",
    "region": "Thorax",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Transversus Thoracis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_vastus_intermedius",
    "name": "Right Vastus Intermedius",
    "rawMeshName": "right vastus intermedius",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Vastus Intermedius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_vastus_lateralis",
    "name": "Right Vastus Lateralis",
    "rawMeshName": "right vastus lateralis",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Vastus Lateralis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_vastus_medialis",
    "name": "Right Vastus Medialis",
    "rawMeshName": "right vastus medialis",
    "type": "muscle",
    "region": "Thigh & Knee",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Vastus Medialis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_second_lumbrical_of_left_foot",
    "name": "Second Lumbrical Of Left Foot",
    "rawMeshName": "second lumbrical of left foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Second Lumbrical Of Left Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_second_lumbrical_of_right_foot",
    "name": "Second Lumbrical Of Right Foot",
    "rawMeshName": "second lumbrical of right foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Second Lumbrical Of Right Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_second_plantar_interosseous_of_left_foot",
    "name": "Second Plantar Interosseous Of Left Foot",
    "rawMeshName": "second plantar interosseous of left foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Second Plantar Interosseous Of Left Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_second_plantar_interosseous_of_right_foot",
    "name": "Second Plantar Interosseous Of Right Foot",
    "rawMeshName": "second plantar interosseous of right foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Second Plantar Interosseous Of Right Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_set_of_anterior_cervical_intertransversarii",
    "name": "Set Of Anterior Cervical Intertransversarii",
    "rawMeshName": "set of anterior cervical intertransversarii",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Set Of Anterior Cervical Intertransversarii) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_set_of_dorsal_interossei_of_left_hand",
    "name": "Set Of Dorsal Interossei Of Left Hand",
    "rawMeshName": "set of dorsal interossei of left hand",
    "type": "muscle",
    "region": "Hand",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Set Of Dorsal Interossei Of Left Hand) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_set_of_dorsal_interossei_of_right_hand",
    "name": "Set Of Dorsal Interossei Of Right Hand",
    "rawMeshName": "set of dorsal interossei of right hand",
    "type": "muscle",
    "region": "Hand",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Set Of Dorsal Interossei Of Right Hand) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_set_of_interspinales_cervicis",
    "name": "Set Of Interspinales Cervicis",
    "rawMeshName": "set of interspinales cervicis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Set Of Interspinales Cervicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_set_of_interspinales_lumborum",
    "name": "Set Of Interspinales Lumborum",
    "rawMeshName": "set of interspinales lumborum",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Set Of Interspinales Lumborum) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_set_of_left_levatores_costarum_breves",
    "name": "Set Of Left Levatores Costarum Breves",
    "rawMeshName": "set of left levatores costarum breves",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Set Of Left Levatores Costarum Breves) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_set_of_left_levatores_costarum_longi",
    "name": "Set Of Left Levatores Costarum Longi",
    "rawMeshName": "set of left levatores costarum longi",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Set Of Left Levatores Costarum Longi) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_set_of_lumbricals_of_left_hand",
    "name": "Set Of Lumbricals Of Left Hand",
    "rawMeshName": "set of lumbricals of left hand",
    "type": "muscle",
    "region": "Hand",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Set Of Lumbricals Of Left Hand) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_set_of_lumbricals_of_right_hand",
    "name": "Set Of Lumbricals Of Right Hand",
    "rawMeshName": "set of lumbricals of right hand",
    "type": "muscle",
    "region": "Hand",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Set Of Lumbricals Of Right Hand) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_set_of_palmar_interossei_of_left_hand",
    "name": "Set Of Palmar Interossei Of Left Hand",
    "rawMeshName": "set of palmar interossei of left hand",
    "type": "muscle",
    "region": "Hand",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Set Of Palmar Interossei Of Left Hand) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_set_of_palmar_interossei_of_right_hand",
    "name": "Set Of Palmar Interossei Of Right Hand",
    "rawMeshName": "set of palmar interossei of right hand",
    "type": "muscle",
    "region": "Hand",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Set Of Palmar Interossei Of Right Hand) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_set_of_posterior_cervical_intertransversarii",
    "name": "Set Of Posterior Cervical Intertransversarii",
    "rawMeshName": "set of posterior cervical intertransversarii",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Set Of Posterior Cervical Intertransversarii) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_set_of_right_levatores_costarum_breves",
    "name": "Set Of Right Levatores Costarum Breves",
    "rawMeshName": "set of right levatores costarum breves",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Set Of Right Levatores Costarum Breves) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_set_of_right_levatores_costarum_longi",
    "name": "Set Of Right Levatores Costarum Longi",
    "rawMeshName": "set of right levatores costarum longi",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Set Of Right Levatores Costarum Longi) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_short_head_of_left_biceps_brachii",
    "name": "Short Head Of Left Biceps Brachii",
    "rawMeshName": "short head of left biceps brachii",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Long head: supraglenoid tubercle of scapula; Short head: coracoid process of scapula.",
    "insertion": "Radial tuberosity and bicipital aponeurosis into deep fascia of forearm.",
    "action": "Powerful supinator of the forearm; powerful flexor of the elbow joint; assists shoulder flexion.",
    "innervation": "Musculocutaneous nerve (C5, C6).",
    "arterialSupply": "Muscular branches of the brachial artery.",
    "description": "Two-headed anterior arm muscle serving as the primary kinetic driver for forearm supination and elbow flexion."
  },
  {
    "id": "muscle_short_head_of_left_biceps_femoris",
    "name": "Short Head Of Left Biceps Femoris",
    "rawMeshName": "short head of left biceps femoris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Short Head Of Left Biceps Femoris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_short_head_of_right_biceps_brachii",
    "name": "Short Head Of Right Biceps Brachii",
    "rawMeshName": "short head of right biceps brachii",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Long head: supraglenoid tubercle of scapula; Short head: coracoid process of scapula.",
    "insertion": "Radial tuberosity and bicipital aponeurosis into deep fascia of forearm.",
    "action": "Powerful supinator of the forearm; powerful flexor of the elbow joint; assists shoulder flexion.",
    "innervation": "Musculocutaneous nerve (C5, C6).",
    "arterialSupply": "Muscular branches of the brachial artery.",
    "description": "Two-headed anterior arm muscle serving as the primary kinetic driver for forearm supination and elbow flexion."
  },
  {
    "id": "muscle_short_head_of_right_biceps_femoris",
    "name": "Short Head Of Right Biceps Femoris",
    "rawMeshName": "short head of right biceps femoris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Short Head Of Right Biceps Femoris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_spinal_part_of_left_deltoid",
    "name": "Spinal Part Of Left Deltoid",
    "rawMeshName": "spinal part of left deltoid",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Clavicular part: lateral 1/3 of clavicle; Acromial part: acromion; Spinal part: spine of scapula.",
    "insertion": "Deltoid tuberosity on the lateral shaft of humerus.",
    "action": "Prime mover of arm abduction (15Â°-90Â°); anterior fibers flex/medially rotate; posterior fibers extend/laterally rotate.",
    "innervation": "Axillary nerve (C5, C6).",
    "arterialSupply": "Posterior circumflex humeral artery and deltoid branch of thoracoacromial artery.",
    "description": "Prominent triangular muscle forming the rounded contour of the human shoulder with tripartite functional vectors."
  },
  {
    "id": "muscle_spinal_part_of_right_deltoid",
    "name": "Spinal Part Of Right Deltoid",
    "rawMeshName": "spinal part of right deltoid",
    "type": "muscle",
    "region": "Shoulder",
    "layer": "superficial",
    "origin": "Clavicular part: lateral 1/3 of clavicle; Acromial part: acromion; Spinal part: spine of scapula.",
    "insertion": "Deltoid tuberosity on the lateral shaft of humerus.",
    "action": "Prime mover of arm abduction (15Â°-90Â°); anterior fibers flex/medially rotate; posterior fibers extend/laterally rotate.",
    "innervation": "Axillary nerve (C5, C6).",
    "arterialSupply": "Posterior circumflex humeral artery and deltoid branch of thoracoacromial artery.",
    "description": "Prominent triangular muscle forming the rounded contour of the human shoulder with tripartite functional vectors."
  },
  {
    "id": "muscle_spinalis",
    "name": "Spinalis",
    "rawMeshName": "spinalis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Spinalis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_sternocostal_part_of_left_pectoralis_major",
    "name": "Sternocostal Part Of Left Pectoralis Major",
    "rawMeshName": "sternocostal part of left pectoralis major",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Clavicular head: anterior medial clavicle; Sternocostal head: anterior sternum, costal cartilages 1-6.",
    "insertion": "Lateral lip of the bicipital groove of humerus.",
    "action": "Adducts, flexes, and medially rotates the arm at the glenohumeral joint.",
    "innervation": "Lateral and medial pectoral nerves (C5-T1).",
    "arterialSupply": "Pectoral branch of thoracoacromial trunk and internal thoracic artery.",
    "description": "Large fan-shaped muscle of the anterior thoracic wall establishing primary power for upper extremity adduction and horizontal flexion."
  },
  {
    "id": "muscle_sternocostal_part_of_right_pectoralis_major",
    "name": "Sternocostal Part Of Right Pectoralis Major",
    "rawMeshName": "sternocostal part of right pectoralis major",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Clavicular head: anterior medial clavicle; Sternocostal head: anterior sternum, costal cartilages 1-6.",
    "insertion": "Lateral lip of the bicipital groove of humerus.",
    "action": "Adducts, flexes, and medially rotates the arm at the glenohumeral joint.",
    "innervation": "Lateral and medial pectoral nerves (C5-T1).",
    "arterialSupply": "Pectoral branch of thoracoacromial trunk and internal thoracic artery.",
    "description": "Large fan-shaped muscle of the anterior thoracic wall establishing primary power for upper extremity adduction and horizontal flexion."
  },
  {
    "id": "muscle_straight_part_of_left_cricothyroid",
    "name": "Straight Part Of Left Cricothyroid",
    "rawMeshName": "straight part of left cricothyroid",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Straight Part Of Left Cricothyroid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_straight_part_of_right_cricothyroid",
    "name": "Straight Part Of Right Cricothyroid",
    "rawMeshName": "straight part of right cricothyroid",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Straight Part Of Right Cricothyroid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_superficial_head_of_left_flexor_pollicis_brevis",
    "name": "Superficial Head Of Left Flexor Pollicis Brevis",
    "rawMeshName": "superficial head of left flexor pollicis brevis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Superficial Head Of Left Flexor Pollicis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_superficial_head_of_right_flexor_pollicis_brevis",
    "name": "Superficial Head Of Right Flexor Pollicis Brevis",
    "rawMeshName": "superficial head of right flexor pollicis brevis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Superficial Head Of Right Flexor Pollicis Brevis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_superior_oblique_part_of_left_longus_colli",
    "name": "Superior Oblique Part Of Left Longus Colli",
    "rawMeshName": "superior oblique part of left longus colli",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Superior Oblique Part Of Left Longus Colli) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_tendinous_arch_of_levator_ani",
    "name": "Tendinous Arch Of Levator Ani",
    "rawMeshName": "tendinous arch of levator ani",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Tendinous Arch Of Levator Ani) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_tendinous_arch_of_levator_ani__2_",
    "name": "Tendinous Arch Of Levator Ani (2)",
    "rawMeshName": "tendinous arch of levator ani (2)",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Tendinous Arch Of Levator Ani (2)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_tendinous_arch_of_levator_ani__3_",
    "name": "Tendinous Arch Of Levator Ani (3)",
    "rawMeshName": "tendinous arch of levator ani (3)",
    "type": "muscle",
    "region": "Pelvis & Perineum",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Tendinous Arch Of Levator Ani (3)) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_tendon_of_right_levator_palpebrae_superioris",
    "name": "Tendon Of Right Levator Palpebrae Superioris",
    "rawMeshName": "tendon of right levator palpebrae superioris",
    "type": "tendon_ligament",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Tendon Of Right Levator Palpebrae Superioris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_third_lumbrical_of_left_foot",
    "name": "Third Lumbrical Of Left Foot",
    "rawMeshName": "third lumbrical of left foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Third Lumbrical Of Left Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_third_lumbrical_of_right_foot",
    "name": "Third Lumbrical Of Right Foot",
    "rawMeshName": "third lumbrical of right foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Third Lumbrical Of Right Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_third_plantar_interosseous_of_left_foot",
    "name": "Third Plantar Interosseous Of Left Foot",
    "rawMeshName": "third plantar interosseous of left foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Third Plantar Interosseous Of Left Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_third_plantar_interosseous_of_right_foot",
    "name": "Third Plantar Interosseous Of Right Foot",
    "rawMeshName": "third plantar interosseous of right foot",
    "type": "muscle",
    "region": "Foot",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Third Plantar Interosseous Of Right Foot) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_transverse_arytenoid",
    "name": "Transverse Arytenoid",
    "rawMeshName": "transverse arytenoid",
    "type": "muscle",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Transverse Arytenoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_transverse_head_of_left_adductor_hallucis",
    "name": "Transverse Head Of Left Adductor Hallucis",
    "rawMeshName": "transverse head of left adductor hallucis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Transverse Head Of Left Adductor Hallucis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_transverse_head_of_left_adductor_pollicis",
    "name": "Transverse Head Of Left Adductor Pollicis",
    "rawMeshName": "transverse head of left adductor pollicis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Transverse Head Of Left Adductor Pollicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_transverse_head_of_right_adductor_hallucis",
    "name": "Transverse Head Of Right Adductor Hallucis",
    "rawMeshName": "transverse head of right adductor hallucis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Transverse Head Of Right Adductor Hallucis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_transverse_head_of_right_adductor_pollicis",
    "name": "Transverse Head Of Right Adductor Pollicis",
    "rawMeshName": "transverse head of right adductor pollicis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Transverse Head Of Right Adductor Pollicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_transverse_part_of_left_trapezius",
    "name": "Transverse Part Of Left Trapezius",
    "rawMeshName": "transverse part of left trapezius",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "External occipital protuberance, nuchal ligament, and spinous processes of C7-T12 vertebrae.",
    "insertion": "Lateral 1/3 of clavicle, acromion, and spine of scapula.",
    "action": "Elevates, retracts, and superiorly rotates the scapula; extends and laterally flexes neck.",
    "innervation": "Spinal accessory nerve (CN XI) motor; C3-C4 sensory proprioception.",
    "arterialSupply": "Transverse cervical artery and dorsal scapular artery.",
    "description": "Expansive superficial diamond-shaped back muscle connecting the axial skeleton to the pectoral girdle."
  },
  {
    "id": "muscle_transverse_part_of_right_trapezius",
    "name": "Transverse Part Of Right Trapezius",
    "rawMeshName": "transverse part of right trapezius",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "External occipital protuberance, nuchal ligament, and spinous processes of C7-T12 vertebrae.",
    "insertion": "Lateral 1/3 of clavicle, acromion, and spine of scapula.",
    "action": "Elevates, retracts, and superiorly rotates the scapula; extends and laterally flexes neck.",
    "innervation": "Spinal accessory nerve (CN XI) motor; C3-C4 sensory proprioception.",
    "arterialSupply": "Transverse cervical artery and dorsal scapular artery.",
    "description": "Expansive superficial diamond-shaped back muscle connecting the axial skeleton to the pectoral girdle."
  },
  {
    "id": "muscle_ulnar_head_of_left_flexor_carpi_ulnaris",
    "name": "Ulnar Head Of Left Flexor Carpi Ulnaris",
    "rawMeshName": "ulnar head of left flexor carpi ulnaris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Ulnar Head Of Left Flexor Carpi Ulnaris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_ulnar_head_of_left_pronator_teres",
    "name": "Ulnar Head Of Left Pronator Teres",
    "rawMeshName": "ulnar head of left pronator teres",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Ulnar Head Of Left Pronator Teres) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_ulnar_head_of_right_flexor_carpi_ulnaris",
    "name": "Ulnar Head Of Right Flexor Carpi Ulnaris",
    "rawMeshName": "ulnar head of right flexor carpi ulnaris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Ulnar Head Of Right Flexor Carpi Ulnaris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_ulnar_head_of_right_pronator_teres",
    "name": "Ulnar Head Of Right Pronator Teres",
    "rawMeshName": "ulnar head of right pronator teres",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Ulnar Head Of Right Pronator Teres) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_vertical_intermediate_part_of_left_longus_colli",
    "name": "Vertical Intermediate Part Of Left Longus Colli",
    "rawMeshName": "vertical intermediate part of left longus colli",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Vertical Intermediate Part Of Left Longus Colli) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_latissimus_dorsi",
    "name": "Left Latissimus Dorsi",
    "rawMeshName": "left latissimus dorsi",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Spinous processes T7-T12, thoracolumbar fascia, iliac crest, and inferior 3-4 ribs.",
    "insertion": "Floor of the intertubercular sulcus of humerus.",
    "action": "Extends, adducts, and medially rotates the humerus at the glenohumeral joint.",
    "innervation": "Thoracodorsal nerve (C6-C8).",
    "arterialSupply": "Thoracodorsal artery and perforating lumbar arteries.",
    "description": "Broadest muscle of the human back delivering powerful pulling leverage to the humerus."
  },
  {
    "id": "muscle_right_latissimus_dorsi",
    "name": "Right Latissimus Dorsi",
    "rawMeshName": "right latissimus dorsi",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "superficial",
    "origin": "Spinous processes T7-T12, thoracolumbar fascia, iliac crest, and inferior 3-4 ribs.",
    "insertion": "Floor of the intertubercular sulcus of humerus.",
    "action": "Extends, adducts, and medially rotates the humerus at the glenohumeral joint.",
    "innervation": "Thoracodorsal nerve (C6-C8).",
    "arterialSupply": "Thoracodorsal artery and perforating lumbar arteries.",
    "description": "Broadest muscle of the human back delivering powerful pulling leverage to the humerus."
  },
  {
    "id": "muscle_left_rectus_abdominis",
    "name": "Left Rectus Abdominis",
    "rawMeshName": "left rectus abdominis",
    "type": "muscle",
    "region": "Abdomen",
    "layer": "superficial",
    "origin": "Pubic crest and pubic symphysis.",
    "insertion": "Xiphoid process and costal cartilages of ribs 5-7.",
    "action": "Flexes the lumbar vertebral column, compresses abdominal viscera, and stabilizes pelvis during locomotion.",
    "innervation": "Thoracoabdominal anterior rami (T7-T11) and subcostal nerve (T12).",
    "arterialSupply": "Superior and inferior epigastric arteries.",
    "description": "Long paired segmented strap muscle enclosed within the rectus sheath, characterized by distinct tendinous intersections."
  },
  {
    "id": "muscle_right_rectus_abdominis",
    "name": "Right Rectus Abdominis",
    "rawMeshName": "right rectus abdominis",
    "type": "muscle",
    "region": "Abdomen",
    "layer": "superficial",
    "origin": "Pubic crest and pubic symphysis.",
    "insertion": "Xiphoid process and costal cartilages of ribs 5-7.",
    "action": "Flexes the lumbar vertebral column, compresses abdominal viscera, and stabilizes pelvis during locomotion.",
    "innervation": "Thoracoabdominal anterior rami (T7-T11) and subcostal nerve (T12).",
    "arterialSupply": "Superior and inferior epigastric arteries.",
    "description": "Long paired segmented strap muscle enclosed within the rectus sheath, characterized by distinct tendinous intersections."
  },
  {
    "id": "muscle_left_internal_oblique",
    "name": "Left Internal Oblique",
    "rawMeshName": "left internal oblique",
    "type": "muscle",
    "region": "Abdomen",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Internal Oblique) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_internal_oblique",
    "name": "Right Internal Oblique",
    "rawMeshName": "right internal oblique",
    "type": "muscle",
    "region": "Abdomen",
    "layer": "intermediate",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Internal Oblique) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_transversus_abdominis",
    "name": "Left Transversus Abdominis",
    "rawMeshName": "left transversus abdominis",
    "type": "muscle",
    "region": "Abdomen",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Transversus Abdominis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_transversus_abdominis",
    "name": "Right Transversus Abdominis",
    "rawMeshName": "right transversus abdominis",
    "type": "muscle",
    "region": "Abdomen",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Transversus Abdominis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_quadratus_lumborum",
    "name": "Left Quadratus Lumborum",
    "rawMeshName": "left quadratus lumborum",
    "type": "muscle",
    "region": "Abdomen",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Quadratus Lumborum) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_quadratus_lumborum",
    "name": "Right Quadratus Lumborum",
    "rawMeshName": "right quadratus lumborum",
    "type": "muscle",
    "region": "Abdomen",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Quadratus Lumborum) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_superficial_part_of_masseter",
    "name": "Left Superficial Part Of Masseter",
    "rawMeshName": "left superficial part of masseter",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Superficial Part Of Masseter) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_superficial_part_of_masseter",
    "name": "Right Superficial Part Of Masseter",
    "rawMeshName": "right superficial part of masseter",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Superficial Part Of Masseter) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_deep_part_of_masseter",
    "name": "Left Deep Part Of Masseter",
    "rawMeshName": "left deep part of masseter",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Deep Part Of Masseter) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_deep_part_of_masseter",
    "name": "Right Deep Part Of Masseter",
    "rawMeshName": "right deep part of masseter",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Deep Part Of Masseter) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_temporalis",
    "name": "Left Temporalis",
    "rawMeshName": "left temporalis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Temporalis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_temporalis",
    "name": "Right Temporalis",
    "rawMeshName": "right temporalis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Temporalis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_medial_pterygoid",
    "name": "Left Medial Pterygoid",
    "rawMeshName": "left medial pterygoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Medial Pterygoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_medial_pterygoid",
    "name": "Right Medial Pterygoid",
    "rawMeshName": "right medial pterygoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Medial Pterygoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_inferior_head_of_lateral_pterygoid",
    "name": "Left Inferior Head Of Lateral Pterygoid",
    "rawMeshName": "left inferior head of lateral pterygoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Inferior Head Of Lateral Pterygoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_inferior_head_of_lateral_pterygoid",
    "name": "Right Inferior Head Of Lateral Pterygoid",
    "rawMeshName": "right inferior head of lateral pterygoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Inferior Head Of Lateral Pterygoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_superior_head_of_lateral_pterygoid",
    "name": "Left Superior Head Of Lateral Pterygoid",
    "rawMeshName": "left superior head of lateral pterygoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Superior Head Of Lateral Pterygoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_superior_head_of_lateral_pterygoid",
    "name": "Right Superior Head Of Lateral Pterygoid",
    "rawMeshName": "right superior head of lateral pterygoid",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Superior Head Of Lateral Pterygoid) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_frontalis",
    "name": "Left Frontalis",
    "rawMeshName": "left frontalis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Frontalis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_frontalis",
    "name": "Right Frontalis",
    "rawMeshName": "right frontalis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Frontalis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_orbital_part_of_orbicularis_oculi",
    "name": "Left Orbital Part Of Orbicularis Oculi",
    "rawMeshName": "left orbital part of orbicularis oculi",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Orbital Part Of Orbicularis Oculi) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_orbital_part_of_orbicularis_oculi",
    "name": "Right Orbital Part Of Orbicularis Oculi",
    "rawMeshName": "right orbital part of orbicularis oculi",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Orbital Part Of Orbicularis Oculi) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_palpebral_part_of_orbicularis_oculi",
    "name": "Left Palpebral Part Of Orbicularis Oculi",
    "rawMeshName": "left palpebral part of orbicularis oculi",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Palpebral Part Of Orbicularis Oculi) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_palpebral_part_of_orbicularis_oculi",
    "name": "Right Palpebral Part Of Orbicularis Oculi",
    "rawMeshName": "right palpebral part of orbicularis oculi",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Palpebral Part Of Orbicularis Oculi) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_orbicularis_oris",
    "name": "Left Orbicularis Oris",
    "rawMeshName": "left orbicularis oris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Orbicularis Oris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_orbicularis_oris",
    "name": "Right Orbicularis Oris",
    "rawMeshName": "right orbicularis oris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Orbicularis Oris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_zygomaticus_major",
    "name": "Left Zygomaticus Major",
    "rawMeshName": "left zygomaticus major",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Zygomaticus Major) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_zygomaticus_major",
    "name": "Right Zygomaticus Major",
    "rawMeshName": "right zygomaticus major",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Zygomaticus Major) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_zygomaticus_minor",
    "name": "Left Zygomaticus Minor",
    "rawMeshName": "left zygomaticus minor",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Zygomaticus Minor) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_zygomaticus_minor",
    "name": "Right Zygomaticus Minor",
    "rawMeshName": "right zygomaticus minor",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Zygomaticus Minor) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_levator_labii_superioris",
    "name": "Left Levator Labii Superioris",
    "rawMeshName": "left levator labii superioris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Levator Labii Superioris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_levator_labii_superioris",
    "name": "Right Levator Labii Superioris",
    "rawMeshName": "right levator labii superioris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Levator Labii Superioris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_depressor_labii_inferioris",
    "name": "Left Depressor Labii Inferioris",
    "rawMeshName": "left depressor labii inferioris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Depressor Labii Inferioris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_depressor_labii_inferioris",
    "name": "Right Depressor Labii Inferioris",
    "rawMeshName": "right depressor labii inferioris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Depressor Labii Inferioris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_depressor_anguli_oris",
    "name": "Left Depressor Anguli Oris",
    "rawMeshName": "left depressor anguli oris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Depressor Anguli Oris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_depressor_anguli_oris",
    "name": "Right Depressor Anguli Oris",
    "rawMeshName": "right depressor anguli oris",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Depressor Anguli Oris) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_risorius",
    "name": "Left Risorius",
    "rawMeshName": "left risorius",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Risorius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_risorius",
    "name": "Right Risorius",
    "rawMeshName": "right risorius",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Risorius) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_mentalis",
    "name": "Left Mentalis",
    "rawMeshName": "left mentalis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Mentalis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_mentalis",
    "name": "Right Mentalis",
    "rawMeshName": "right mentalis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Mentalis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_procerus",
    "name": "Left Procerus",
    "rawMeshName": "left procerus",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Procerus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_procerus",
    "name": "Right Procerus",
    "rawMeshName": "right procerus",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Procerus) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_nasalis",
    "name": "Left Nasalis",
    "rawMeshName": "left nasalis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Nasalis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_nasalis",
    "name": "Right Nasalis",
    "rawMeshName": "right nasalis",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Nasalis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_corrugator_supercilii",
    "name": "Left Corrugator Supercilii",
    "rawMeshName": "left corrugator supercilii",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Corrugator Supercilii) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_corrugator_supercilii",
    "name": "Right Corrugator Supercilii",
    "rawMeshName": "right corrugator supercilii",
    "type": "muscle",
    "region": "Head & Neck",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Corrugator Supercilii) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_multifidus_cervicis",
    "name": "Left Multifidus Cervicis",
    "rawMeshName": "left multifidus cervicis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Multifidus Cervicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_multifidus_cervicis",
    "name": "Right Multifidus Cervicis",
    "rawMeshName": "right multifidus cervicis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Multifidus Cervicis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_multifidus_thoracis",
    "name": "Left Multifidus Thoracis",
    "rawMeshName": "left multifidus thoracis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Multifidus Thoracis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_multifidus_thoracis",
    "name": "Right Multifidus Thoracis",
    "rawMeshName": "right multifidus thoracis",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Multifidus Thoracis) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_multifidus_lumborum",
    "name": "Left Multifidus Lumborum",
    "rawMeshName": "left multifidus lumborum",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Multifidus Lumborum) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_multifidus_lumborum",
    "name": "Right Multifidus Lumborum",
    "rawMeshName": "right multifidus lumborum",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Multifidus Lumborum) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_rotatores",
    "name": "Left Rotatores",
    "rawMeshName": "left rotatores",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Rotatores) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_rotatores",
    "name": "Right Rotatores",
    "rawMeshName": "right rotatores",
    "type": "muscle",
    "region": "Back & Spine",
    "layer": "deep",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Rotatores) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_iliotibial_tract",
    "name": "Left Iliotibial Tract",
    "rawMeshName": "left iliotibial tract",
    "type": "tendon_ligament",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Iliotibial Tract) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_iliotibial_tract",
    "name": "Right Iliotibial Tract",
    "rawMeshName": "right iliotibial tract",
    "type": "tendon_ligament",
    "region": "Thigh & Knee",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Iliotibial Tract) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_posterior_layer_of_thoracolumbar_fascia",
    "name": "Left Posterior Layer Of Thoracolumbar Fascia",
    "rawMeshName": "left posterior layer of thoracolumbar fascia",
    "type": "tendon_ligament",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Posterior Layer Of Thoracolumbar Fascia) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_posterior_layer_of_thoracolumbar_fascia",
    "name": "Right Posterior Layer Of Thoracolumbar Fascia",
    "rawMeshName": "right posterior layer of thoracolumbar fascia",
    "type": "tendon_ligament",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Posterior Layer Of Thoracolumbar Fascia) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_anterior_layer_of_thoracolumbar_fascia",
    "name": "Left Anterior Layer Of Thoracolumbar Fascia",
    "rawMeshName": "left anterior layer of thoracolumbar fascia",
    "type": "tendon_ligament",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Anterior Layer Of Thoracolumbar Fascia) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_anterior_layer_of_thoracolumbar_fascia",
    "name": "Right Anterior Layer Of Thoracolumbar Fascia",
    "rawMeshName": "right anterior layer of thoracolumbar fascia",
    "type": "tendon_ligament",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Anterior Layer Of Thoracolumbar Fascia) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_left_middle_layer_of_thoracolumbar_fascia",
    "name": "Left Middle Layer Of Thoracolumbar Fascia",
    "rawMeshName": "left middle layer of thoracolumbar fascia",
    "type": "tendon_ligament",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Left Middle Layer Of Thoracolumbar Fascia) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "muscle_right_middle_layer_of_thoracolumbar_fascia",
    "name": "Right Middle Layer Of Thoracolumbar Fascia",
    "rawMeshName": "right middle layer of thoracolumbar fascia",
    "type": "tendon_ligament",
    "region": "Thorax",
    "layer": "superficial",
    "origin": "Proximal anatomical attachment on corresponding bone and aponeurosis.",
    "insertion": "Distal tendon insertion on target skeletal lever.",
    "action": "Contraction drives kinetic joint movement and joint stabilization.",
    "innervation": "Somatic motor and proprioceptive neural plexus branches.",
    "arterialSupply": "Muscular branches of the regional arterial vasculature.",
    "description": "Anatomical structure (Right Middle Layer Of Thoracolumbar Fascia) performing muscular stabilization, postural balance, and kinetic articulation."
  },
  {
    "id": "bone_atlas",
    "name": "Atlas",
    "rawMeshName": "atlas",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Atlas) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_axis",
    "name": "Axis",
    "rawMeshName": "axis",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Axis) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_body_of_sternum",
    "name": "Body Of Sternum",
    "rawMeshName": "body of sternum",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Body Of Sternum) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_left_big_toe",
    "name": "Distal Phalanx Of Left Big Toe",
    "rawMeshName": "distal phalanx of left big toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Left Big Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_left_fourth_toe",
    "name": "Distal Phalanx Of Left Fourth Toe",
    "rawMeshName": "distal phalanx of left fourth toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Left Fourth Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_left_index_finger",
    "name": "Distal Phalanx Of Left Index Finger",
    "rawMeshName": "distal phalanx of left index finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Left Index Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_left_little_finger",
    "name": "Distal Phalanx Of Left Little Finger",
    "rawMeshName": "distal phalanx of left little finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Left Little Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_left_little_toe",
    "name": "Distal Phalanx Of Left Little Toe",
    "rawMeshName": "distal phalanx of left little toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Left Little Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_left_middle_finger",
    "name": "Distal Phalanx Of Left Middle Finger",
    "rawMeshName": "distal phalanx of left middle finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Left Middle Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_left_ring_finger",
    "name": "Distal Phalanx Of Left Ring Finger",
    "rawMeshName": "distal phalanx of left ring finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Left Ring Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_left_second_toe",
    "name": "Distal Phalanx Of Left Second Toe",
    "rawMeshName": "distal phalanx of left second toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Left Second Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_left_third_toe",
    "name": "Distal Phalanx Of Left Third Toe",
    "rawMeshName": "distal phalanx of left third toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Left Third Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_left_thumb",
    "name": "Distal Phalanx Of Left Thumb",
    "rawMeshName": "distal phalanx of left thumb",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Left Thumb) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_right_big_toe",
    "name": "Distal Phalanx Of Right Big Toe",
    "rawMeshName": "distal phalanx of right big toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Right Big Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_right_fourth_toe",
    "name": "Distal Phalanx Of Right Fourth Toe",
    "rawMeshName": "distal phalanx of right fourth toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Right Fourth Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_right_index_finger",
    "name": "Distal Phalanx Of Right Index Finger",
    "rawMeshName": "distal phalanx of right index finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Right Index Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_right_little_finger",
    "name": "Distal Phalanx Of Right Little Finger",
    "rawMeshName": "distal phalanx of right little finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Right Little Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_right_little_toe",
    "name": "Distal Phalanx Of Right Little Toe",
    "rawMeshName": "distal phalanx of right little toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Right Little Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_right_middle_finger",
    "name": "Distal Phalanx Of Right Middle Finger",
    "rawMeshName": "distal phalanx of right middle finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Right Middle Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_right_ring_finger",
    "name": "Distal Phalanx Of Right Ring Finger",
    "rawMeshName": "distal phalanx of right ring finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Right Ring Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_right_second_toe",
    "name": "Distal Phalanx Of Right Second Toe",
    "rawMeshName": "distal phalanx of right second toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Right Second Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_right_third_toe",
    "name": "Distal Phalanx Of Right Third Toe",
    "rawMeshName": "distal phalanx of right third toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Right Third Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_distal_phalanx_of_right_thumb",
    "name": "Distal Phalanx Of Right Thumb",
    "rawMeshName": "distal phalanx of right thumb",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Distal Phalanx Of Right Thumb) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_eighth_thoracic_vertebra",
    "name": "Eighth Thoracic Vertebra",
    "rawMeshName": "eighth thoracic vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Eighth Thoracic Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_eleventh_thoracic_vertebra",
    "name": "Eleventh Thoracic Vertebra",
    "rawMeshName": "eleventh thoracic vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Eleventh Thoracic Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_ethmoid",
    "name": "Ethmoid",
    "rawMeshName": "ethmoid",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Ethmoid) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_fifth_cervical_vertebra",
    "name": "Fifth Cervical Vertebra",
    "rawMeshName": "fifth cervical vertebra",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Fifth Cervical Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_fifth_lumbar_vertebra",
    "name": "Fifth Lumbar Vertebra",
    "rawMeshName": "fifth lumbar vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Fifth Lumbar Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_fifth_thoracic_vertebra",
    "name": "Fifth Thoracic Vertebra",
    "rawMeshName": "fifth thoracic vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Fifth Thoracic Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_first_lumbar_vertebra",
    "name": "First Lumbar Vertebra",
    "rawMeshName": "first lumbar vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (First Lumbar Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_first_thoracic_vertebra",
    "name": "First Thoracic Vertebra",
    "rawMeshName": "first thoracic vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (First Thoracic Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_fourth_cervical_vertebra",
    "name": "Fourth Cervical Vertebra",
    "rawMeshName": "fourth cervical vertebra",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Fourth Cervical Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_fourth_lumbar_vertebra",
    "name": "Fourth Lumbar Vertebra",
    "rawMeshName": "fourth lumbar vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Fourth Lumbar Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_fourth_thoracic_vertebra",
    "name": "Fourth Thoracic Vertebra",
    "rawMeshName": "fourth thoracic vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Fourth Thoracic Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_frontal_bone",
    "name": "Frontal Bone",
    "rawMeshName": "frontal bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Frontal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_hyoid_bone",
    "name": "Hyoid Bone",
    "rawMeshName": "hyoid bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Hyoid Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_hyoid_bone__2_",
    "name": "Hyoid Bone (2)",
    "rawMeshName": "hyoid bone (2)",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Hyoid Bone (2)) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_calcaneus",
    "name": "Left Calcaneus",
    "rawMeshName": "left calcaneus",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Calcaneus) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_capitate",
    "name": "Left Capitate",
    "rawMeshName": "left capitate",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Capitate) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_clavicle",
    "name": "Left Clavicle",
    "rawMeshName": "left clavicle",
    "type": "bone",
    "region": "Shoulder",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Clavicle) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_cuboid_bone",
    "name": "Left Cuboid Bone",
    "rawMeshName": "left cuboid bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Cuboid Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_eighth_rib",
    "name": "Left Eighth Rib",
    "rawMeshName": "left eighth rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Eighth Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_eleventh_rib",
    "name": "Left Eleventh Rib",
    "rawMeshName": "left eleventh rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Eleventh Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_femur",
    "name": "Left Femur",
    "rawMeshName": "left femur",
    "type": "bone",
    "region": "Thigh & Knee",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Femur) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_fibula",
    "name": "Left Fibula",
    "rawMeshName": "left fibula",
    "type": "bone",
    "region": "Leg & Ankle",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Fibula) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_fifth_metacarpal_bone",
    "name": "Left Fifth Metacarpal Bone",
    "rawMeshName": "left fifth metacarpal bone",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Fifth Metacarpal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_fifth_metatarsal_bone",
    "name": "Left Fifth Metatarsal Bone",
    "rawMeshName": "left fifth metatarsal bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Fifth Metatarsal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_fifth_rib",
    "name": "Left Fifth Rib",
    "rawMeshName": "left fifth rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Fifth Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_first_metacarpal_bone",
    "name": "Left First Metacarpal Bone",
    "rawMeshName": "left first metacarpal bone",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left First Metacarpal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_first_metatarsal_bone",
    "name": "Left First Metatarsal Bone",
    "rawMeshName": "left first metatarsal bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left First Metatarsal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_first_rib",
    "name": "Left First Rib",
    "rawMeshName": "left first rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left First Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_fourth_metacarpal_bone",
    "name": "Left Fourth Metacarpal Bone",
    "rawMeshName": "left fourth metacarpal bone",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Fourth Metacarpal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_fourth_metatarsal_bone",
    "name": "Left Fourth Metatarsal Bone",
    "rawMeshName": "left fourth metatarsal bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Fourth Metatarsal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_fourth_rib",
    "name": "Left Fourth Rib",
    "rawMeshName": "left fourth rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Fourth Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_hamate",
    "name": "Left Hamate",
    "rawMeshName": "left hamate",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Hamate) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_hip_bone",
    "name": "Left Hip Bone",
    "rawMeshName": "left hip bone",
    "type": "bone",
    "region": "Pelvis & Perineum",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Hip Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_humerus",
    "name": "Left Humerus",
    "rawMeshName": "left humerus",
    "type": "bone",
    "region": "Arm & Elbow",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Humerus) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_intermediate_cuneiform_bone",
    "name": "Left Intermediate Cuneiform Bone",
    "rawMeshName": "left intermediate cuneiform bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Intermediate Cuneiform Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_lacrimal_bone",
    "name": "Left Lacrimal Bone",
    "rawMeshName": "left lacrimal bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Lacrimal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_lateral_cuneiform_bone",
    "name": "Left Lateral Cuneiform Bone",
    "rawMeshName": "left lateral cuneiform bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Lateral Cuneiform Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_lunate",
    "name": "Left Lunate",
    "rawMeshName": "left lunate",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Lunate) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_maxilla",
    "name": "Left Maxilla",
    "rawMeshName": "left maxilla",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Maxilla) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_medial_cuneiform_bone",
    "name": "Left Medial Cuneiform Bone",
    "rawMeshName": "left medial cuneiform bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Medial Cuneiform Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_nasal_bone",
    "name": "Left Nasal Bone",
    "rawMeshName": "left nasal bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Nasal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_ninth_rib",
    "name": "Left Ninth Rib",
    "rawMeshName": "left ninth rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Ninth Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_palatine_bone",
    "name": "Left Palatine Bone",
    "rawMeshName": "left palatine bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Palatine Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_parietal_bone",
    "name": "Left Parietal Bone",
    "rawMeshName": "left parietal bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Parietal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_patella",
    "name": "Left Patella",
    "rawMeshName": "left patella",
    "type": "bone",
    "region": "Thigh & Knee",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Patella) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_pisiform",
    "name": "Left Pisiform",
    "rawMeshName": "left pisiform",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Pisiform) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_radius",
    "name": "Left Radius",
    "rawMeshName": "left radius",
    "type": "bone",
    "region": "Forearm & Wrist",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Radius) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_scaphoid",
    "name": "Left Scaphoid",
    "rawMeshName": "left scaphoid",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Scaphoid) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_scapula",
    "name": "Left Scapula",
    "rawMeshName": "left scapula",
    "type": "bone",
    "region": "Shoulder",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Scapula) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_second_metacarpal_bone",
    "name": "Left Second Metacarpal Bone",
    "rawMeshName": "left second metacarpal bone",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Second Metacarpal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_second_metatarsal_bone",
    "name": "Left Second Metatarsal Bone",
    "rawMeshName": "left second metatarsal bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Second Metatarsal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_second_rib",
    "name": "Left Second Rib",
    "rawMeshName": "left second rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Second Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_seventh_rib",
    "name": "Left Seventh Rib",
    "rawMeshName": "left seventh rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Seventh Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_sixth_rib",
    "name": "Left Sixth Rib",
    "rawMeshName": "left sixth rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Sixth Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_talus",
    "name": "Left Talus",
    "rawMeshName": "left talus",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Talus) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_temporal_bone",
    "name": "Left Temporal Bone",
    "rawMeshName": "left temporal bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Temporal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_tenth_rib",
    "name": "Left Tenth Rib",
    "rawMeshName": "left tenth rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Tenth Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_third_metacarpal_bone",
    "name": "Left Third Metacarpal Bone",
    "rawMeshName": "left third metacarpal bone",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Third Metacarpal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_third_metatarsal_bone",
    "name": "Left Third Metatarsal Bone",
    "rawMeshName": "left third metatarsal bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Third Metatarsal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_third_rib",
    "name": "Left Third Rib",
    "rawMeshName": "left third rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Third Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_tibia",
    "name": "Left Tibia",
    "rawMeshName": "left tibia",
    "type": "bone",
    "region": "Leg & Ankle",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Tibia) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_trapezium",
    "name": "Left Trapezium",
    "rawMeshName": "left trapezium",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Trapezium) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_trapezoid",
    "name": "Left Trapezoid",
    "rawMeshName": "left trapezoid",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Trapezoid) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_twelfth_rib",
    "name": "Left Twelfth Rib",
    "rawMeshName": "left twelfth rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Twelfth Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_ulna",
    "name": "Left Ulna",
    "rawMeshName": "left ulna",
    "type": "bone",
    "region": "Forearm & Wrist",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Ulna) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_left_zygomatic_bone",
    "name": "Left Zygomatic Bone",
    "rawMeshName": "left zygomatic bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Left Zygomatic Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_mandible",
    "name": "Mandible",
    "rawMeshName": "mandible",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Mandible) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_manubrium",
    "name": "Manubrium",
    "rawMeshName": "manubrium",
    "type": "bone",
    "region": "Skeleton",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Manubrium) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_left_fourth_toe",
    "name": "Middle Phalanx Of Left Fourth Toe",
    "rawMeshName": "middle phalanx of left fourth toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Left Fourth Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_left_index_finger",
    "name": "Middle Phalanx Of Left Index Finger",
    "rawMeshName": "middle phalanx of left index finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Left Index Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_left_little_finger",
    "name": "Middle Phalanx Of Left Little Finger",
    "rawMeshName": "middle phalanx of left little finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Left Little Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_left_little_toe",
    "name": "Middle Phalanx Of Left Little Toe",
    "rawMeshName": "middle phalanx of left little toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Left Little Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_left_middle_finger",
    "name": "Middle Phalanx Of Left Middle Finger",
    "rawMeshName": "middle phalanx of left middle finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Left Middle Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_left_ring_finger",
    "name": "Middle Phalanx Of Left Ring Finger",
    "rawMeshName": "middle phalanx of left ring finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Left Ring Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_left_second_toe",
    "name": "Middle Phalanx Of Left Second Toe",
    "rawMeshName": "middle phalanx of left second toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Left Second Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_left_third_toe",
    "name": "Middle Phalanx Of Left Third Toe",
    "rawMeshName": "middle phalanx of left third toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Left Third Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_right_fourth_toe",
    "name": "Middle Phalanx Of Right Fourth Toe",
    "rawMeshName": "middle phalanx of right fourth toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Right Fourth Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_right_index_finger",
    "name": "Middle Phalanx Of Right Index Finger",
    "rawMeshName": "middle phalanx of right index finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Right Index Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_right_little_finger",
    "name": "Middle Phalanx Of Right Little Finger",
    "rawMeshName": "middle phalanx of right little finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Right Little Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_right_little_toe",
    "name": "Middle Phalanx Of Right Little Toe",
    "rawMeshName": "middle phalanx of right little toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Right Little Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_right_middle_finger",
    "name": "Middle Phalanx Of Right Middle Finger",
    "rawMeshName": "middle phalanx of right middle finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Right Middle Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_right_ring_finger",
    "name": "Middle Phalanx Of Right Ring Finger",
    "rawMeshName": "middle phalanx of right ring finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Right Ring Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_right_second_toe",
    "name": "Middle Phalanx Of Right Second Toe",
    "rawMeshName": "middle phalanx of right second toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Right Second Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_middle_phalanx_of_right_third_toe",
    "name": "Middle Phalanx Of Right Third Toe",
    "rawMeshName": "middle phalanx of right third toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Middle Phalanx Of Right Third Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_navicular_bone_of_left_foot",
    "name": "Navicular Bone Of Left Foot",
    "rawMeshName": "navicular bone of left foot",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Navicular Bone Of Left Foot) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_navicular_bone_of_right_foot",
    "name": "Navicular Bone Of Right Foot",
    "rawMeshName": "navicular bone of right foot",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Navicular Bone Of Right Foot) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_ninth_thoracic_vertebra",
    "name": "Ninth Thoracic Vertebra",
    "rawMeshName": "ninth thoracic vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Ninth Thoracic Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_occipital_bone",
    "name": "Occipital Bone",
    "rawMeshName": "occipital bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Occipital Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_left_big_toe",
    "name": "Proximal Phalanx Of Left Big Toe",
    "rawMeshName": "proximal phalanx of left big toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Left Big Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_left_fourth_toe",
    "name": "Proximal Phalanx Of Left Fourth Toe",
    "rawMeshName": "proximal phalanx of left fourth toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Left Fourth Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_left_index_finger",
    "name": "Proximal Phalanx Of Left Index Finger",
    "rawMeshName": "proximal phalanx of left index finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Left Index Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_left_little_finger",
    "name": "Proximal Phalanx Of Left Little Finger",
    "rawMeshName": "proximal phalanx of left little finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Left Little Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_left_little_toe",
    "name": "Proximal Phalanx Of Left Little Toe",
    "rawMeshName": "proximal phalanx of left little toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Left Little Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_left_middle_finger",
    "name": "Proximal Phalanx Of Left Middle Finger",
    "rawMeshName": "proximal phalanx of left middle finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Left Middle Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_left_ring_finger",
    "name": "Proximal Phalanx Of Left Ring Finger",
    "rawMeshName": "proximal phalanx of left ring finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Left Ring Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_left_second_toe",
    "name": "Proximal Phalanx Of Left Second Toe",
    "rawMeshName": "proximal phalanx of left second toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Left Second Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_left_third_toe",
    "name": "Proximal Phalanx Of Left Third Toe",
    "rawMeshName": "proximal phalanx of left third toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Left Third Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_left_thumb",
    "name": "Proximal Phalanx Of Left Thumb",
    "rawMeshName": "proximal phalanx of left thumb",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Left Thumb) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_right_big_toe",
    "name": "Proximal Phalanx Of Right Big Toe",
    "rawMeshName": "proximal phalanx of right big toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Right Big Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_right_fourth_toe",
    "name": "Proximal Phalanx Of Right Fourth Toe",
    "rawMeshName": "proximal phalanx of right fourth toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Right Fourth Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_right_index_finger",
    "name": "Proximal Phalanx Of Right Index Finger",
    "rawMeshName": "proximal phalanx of right index finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Right Index Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_right_little_finger",
    "name": "Proximal Phalanx Of Right Little Finger",
    "rawMeshName": "proximal phalanx of right little finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Right Little Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_right_little_toe",
    "name": "Proximal Phalanx Of Right Little Toe",
    "rawMeshName": "proximal phalanx of right little toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Right Little Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_right_middle_finger",
    "name": "Proximal Phalanx Of Right Middle Finger",
    "rawMeshName": "proximal phalanx of right middle finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Right Middle Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_right_ring_finger",
    "name": "Proximal Phalanx Of Right Ring Finger",
    "rawMeshName": "proximal phalanx of right ring finger",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Right Ring Finger) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_right_second_toe",
    "name": "Proximal Phalanx Of Right Second Toe",
    "rawMeshName": "proximal phalanx of right second toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Right Second Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_right_third_toe",
    "name": "Proximal Phalanx Of Right Third Toe",
    "rawMeshName": "proximal phalanx of right third toe",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Right Third Toe) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_proximal_phalanx_of_right_thumb",
    "name": "Proximal Phalanx Of Right Thumb",
    "rawMeshName": "proximal phalanx of right thumb",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Proximal Phalanx Of Right Thumb) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_calcaneus",
    "name": "Right Calcaneus",
    "rawMeshName": "right calcaneus",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Calcaneus) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_capitate",
    "name": "Right Capitate",
    "rawMeshName": "right capitate",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Capitate) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_clavicle",
    "name": "Right Clavicle",
    "rawMeshName": "right clavicle",
    "type": "bone",
    "region": "Shoulder",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Clavicle) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_cuboid_bone",
    "name": "Right Cuboid Bone",
    "rawMeshName": "right cuboid bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Cuboid Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_eighth_rib",
    "name": "Right Eighth Rib",
    "rawMeshName": "right eighth rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Eighth Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_eleventh_rib",
    "name": "Right Eleventh Rib",
    "rawMeshName": "right eleventh rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Eleventh Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_femur",
    "name": "Right Femur",
    "rawMeshName": "right femur",
    "type": "bone",
    "region": "Thigh & Knee",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Femur) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_fibula",
    "name": "Right Fibula",
    "rawMeshName": "right fibula",
    "type": "bone",
    "region": "Leg & Ankle",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Fibula) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_fifth_metacarpal_bone",
    "name": "Right Fifth Metacarpal Bone",
    "rawMeshName": "right fifth metacarpal bone",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Fifth Metacarpal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_fifth_metatarsal_bone",
    "name": "Right Fifth Metatarsal Bone",
    "rawMeshName": "right fifth metatarsal bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Fifth Metatarsal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_fifth_rib",
    "name": "Right Fifth Rib",
    "rawMeshName": "right fifth rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Fifth Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_first_metacarpal_bone",
    "name": "Right First Metacarpal Bone",
    "rawMeshName": "right first metacarpal bone",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right First Metacarpal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_first_metatarsal_bone",
    "name": "Right First Metatarsal Bone",
    "rawMeshName": "right first metatarsal bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right First Metatarsal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_first_rib",
    "name": "Right First Rib",
    "rawMeshName": "right first rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right First Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_fourth_metacarpal_bone",
    "name": "Right Fourth Metacarpal Bone",
    "rawMeshName": "right fourth metacarpal bone",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Fourth Metacarpal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_fourth_metatarsal_bone",
    "name": "Right Fourth Metatarsal Bone",
    "rawMeshName": "right fourth metatarsal bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Fourth Metatarsal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_fourth_rib",
    "name": "Right Fourth Rib",
    "rawMeshName": "right fourth rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Fourth Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_hamate",
    "name": "Right Hamate",
    "rawMeshName": "right hamate",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Hamate) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_hip_bone",
    "name": "Right Hip Bone",
    "rawMeshName": "right hip bone",
    "type": "bone",
    "region": "Pelvis & Perineum",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Hip Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_humerus",
    "name": "Right Humerus",
    "rawMeshName": "right humerus",
    "type": "bone",
    "region": "Arm & Elbow",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Humerus) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_intermediate_cuneiform_bone",
    "name": "Right Intermediate Cuneiform Bone",
    "rawMeshName": "right intermediate cuneiform bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Intermediate Cuneiform Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_lacrimal_bone",
    "name": "Right Lacrimal Bone",
    "rawMeshName": "right lacrimal bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Lacrimal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_lateral_cuneiform_bone",
    "name": "Right Lateral Cuneiform Bone",
    "rawMeshName": "right lateral cuneiform bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Lateral Cuneiform Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_lunate",
    "name": "Right Lunate",
    "rawMeshName": "right lunate",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Lunate) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_maxilla",
    "name": "Right Maxilla",
    "rawMeshName": "right maxilla",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Maxilla) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_medial_cuneiform_bone",
    "name": "Right Medial Cuneiform Bone",
    "rawMeshName": "right medial cuneiform bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Medial Cuneiform Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_nasal_bone",
    "name": "Right Nasal Bone",
    "rawMeshName": "right nasal bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Nasal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_ninth_rib",
    "name": "Right Ninth Rib",
    "rawMeshName": "right ninth rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Ninth Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_palatine_bone",
    "name": "Right Palatine Bone",
    "rawMeshName": "right palatine bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Palatine Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_parietal_bone",
    "name": "Right Parietal Bone",
    "rawMeshName": "right parietal bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Parietal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_patella",
    "name": "Right Patella",
    "rawMeshName": "right patella",
    "type": "bone",
    "region": "Thigh & Knee",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Patella) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_pisiform",
    "name": "Right Pisiform",
    "rawMeshName": "right pisiform",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Pisiform) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_radius",
    "name": "Right Radius",
    "rawMeshName": "right radius",
    "type": "bone",
    "region": "Forearm & Wrist",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Radius) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_scaphoid",
    "name": "Right Scaphoid",
    "rawMeshName": "right scaphoid",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Scaphoid) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_scapula",
    "name": "Right Scapula",
    "rawMeshName": "right scapula",
    "type": "bone",
    "region": "Shoulder",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Scapula) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_second_metacarpal_bone",
    "name": "Right Second Metacarpal Bone",
    "rawMeshName": "right second metacarpal bone",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Second Metacarpal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_second_metatarsal_bone",
    "name": "Right Second Metatarsal Bone",
    "rawMeshName": "right second metatarsal bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Second Metatarsal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_second_rib",
    "name": "Right Second Rib",
    "rawMeshName": "right second rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Second Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_seventh_rib",
    "name": "Right Seventh Rib",
    "rawMeshName": "right seventh rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Seventh Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_sixth_rib",
    "name": "Right Sixth Rib",
    "rawMeshName": "right sixth rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Sixth Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_talus",
    "name": "Right Talus",
    "rawMeshName": "right talus",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Talus) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_temporal_bone",
    "name": "Right Temporal Bone",
    "rawMeshName": "right temporal bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Temporal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_tenth_rib",
    "name": "Right Tenth Rib",
    "rawMeshName": "right tenth rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Tenth Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_third_metacarpal_bone",
    "name": "Right Third Metacarpal Bone",
    "rawMeshName": "right third metacarpal bone",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Third Metacarpal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_third_metatarsal_bone",
    "name": "Right Third Metatarsal Bone",
    "rawMeshName": "right third metatarsal bone",
    "type": "bone",
    "region": "Foot",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Third Metatarsal Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_third_rib",
    "name": "Right Third Rib",
    "rawMeshName": "right third rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Third Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_tibia",
    "name": "Right Tibia",
    "rawMeshName": "right tibia",
    "type": "bone",
    "region": "Leg & Ankle",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Tibia) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_trapezium",
    "name": "Right Trapezium",
    "rawMeshName": "right trapezium",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Trapezium) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_trapezoid",
    "name": "Right Trapezoid",
    "rawMeshName": "right trapezoid",
    "type": "bone",
    "region": "Hand",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Trapezoid) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_twelfth_rib",
    "name": "Right Twelfth Rib",
    "rawMeshName": "right twelfth rib",
    "type": "bone",
    "region": "Thorax",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Twelfth Rib) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_ulna",
    "name": "Right Ulna",
    "rawMeshName": "right ulna",
    "type": "bone",
    "region": "Forearm & Wrist",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Ulna) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_right_zygomatic_bone",
    "name": "Right Zygomatic Bone",
    "rawMeshName": "right zygomatic bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Right Zygomatic Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_second_lumbar_vertebra",
    "name": "Second Lumbar Vertebra",
    "rawMeshName": "second lumbar vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Second Lumbar Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_second_thoracic_vertebra",
    "name": "Second Thoracic Vertebra",
    "rawMeshName": "second thoracic vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Second Thoracic Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_sesamoid_bone_of_left_foot",
    "name": "Sesamoid Bone Of Left Foot",
    "rawMeshName": "sesamoid bone of left foot",
    "type": "bone",
    "region": "Skeleton",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Sesamoid Bone Of Left Foot) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_sesamoid_bone_of_left_foot__2_",
    "name": "Sesamoid Bone Of Left Foot (2)",
    "rawMeshName": "sesamoid bone of left foot (2)",
    "type": "bone",
    "region": "Skeleton",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Sesamoid Bone Of Left Foot (2)) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_sesamoid_bone_of_right_foot",
    "name": "Sesamoid Bone Of Right Foot",
    "rawMeshName": "sesamoid bone of right foot",
    "type": "bone",
    "region": "Skeleton",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Sesamoid Bone Of Right Foot) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_sesamoid_bone_of_right_foot__2_",
    "name": "Sesamoid Bone Of Right Foot (2)",
    "rawMeshName": "sesamoid bone of right foot (2)",
    "type": "bone",
    "region": "Skeleton",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Sesamoid Bone Of Right Foot (2)) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_seventh_cervical_vertebra",
    "name": "Seventh Cervical Vertebra",
    "rawMeshName": "seventh cervical vertebra",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Seventh Cervical Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_seventh_thoracic_vertebra",
    "name": "Seventh Thoracic Vertebra",
    "rawMeshName": "seventh thoracic vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Seventh Thoracic Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_sixth_cervical_vertebra",
    "name": "Sixth Cervical Vertebra",
    "rawMeshName": "sixth cervical vertebra",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Sixth Cervical Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_sixth_thoracic_vertebra",
    "name": "Sixth Thoracic Vertebra",
    "rawMeshName": "sixth thoracic vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Sixth Thoracic Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_sphenoid_bone",
    "name": "Sphenoid Bone",
    "rawMeshName": "sphenoid bone",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Sphenoid Bone) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_tenth_thoracic_vertebra",
    "name": "Tenth Thoracic Vertebra",
    "rawMeshName": "tenth thoracic vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Tenth Thoracic Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_third_cervical_vertebra",
    "name": "Third Cervical Vertebra",
    "rawMeshName": "third cervical vertebra",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Third Cervical Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_third_lumbar_vertebra",
    "name": "Third Lumbar Vertebra",
    "rawMeshName": "third lumbar vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Third Lumbar Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_third_thoracic_vertebra",
    "name": "Third Thoracic Vertebra",
    "rawMeshName": "third thoracic vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Third Thoracic Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_twelfth_thoracic_vertebra",
    "name": "Twelfth Thoracic Vertebra",
    "rawMeshName": "twelfth thoracic vertebra",
    "type": "bone",
    "region": "Back & Spine",
    "layer": "skeletal",
    "origin": "Part of the axial / appendicular skeletal architecture.",
    "insertion": "Articulates with adjoining bones forming anatomical joints.",
    "action": "Provides structural rigidity, protection of vital organs, lever mechanics, and mineral homeostasis.",
    "innervation": "Periosteal sensory and sympathetic vasomotor nerves.",
    "arterialSupply": "Nutrient arterial channels and periosteal capillary network.",
    "description": "A vital skeletal element (Twelfth Thoracic Vertebra) providing structural stability, biomechanical lever arms, and anatomical anchoring points."
  },
  {
    "id": "bone_vomer",
    "name": "Vomer",
    "rawMeshName": "vomer",
    "type": "bone",
    "region": "Head & Neck",
    "layer": "skeletal",
    "origin": "Part of the axial / appendixœìën7–Ç¿ç)ˆ|d@Ú¬í¹ìÆØŠì$ÂH±ÖRfÕÕìnÆuK]d+‹}§y†y²=¼UYd]äD”[g0Iì®ÃK±~òð7IT’ê=Mh%$*ã=«i\7%ý·/¿ ð¿/YVÑ²fyöå7äËSøSjZ‘¬Þ“hósÎ2–íÈ:ÏàÇm^¦üoQÕyÊbˆ•ÔU_ëÈ®Êü–m PU—OŒK¶cVß“¢ÌyVÀ–ä[rËxóreÕ1Iè--IJã}”±~ˆ²t)bŸ§4¯ê¨bUï%àÙmÔ¦LK&¬+šUyy'b¨îÒ"ª÷Þ‘ÜFUžæu^’öò_Ö:J®›¢Hîxl?6uÉhVýˆð|e4©D¬E—X,"¿ƒHëyù¾Š!.YÑ–³záöÓÀRžÄÑ_áíÊg¼t ìxI÷
^zÍQzk–ëâ²¼¢2UEÕû:Qïó’GT¨ïú?ž«ÿUE·áâ_wõ‘ûœmVxL«Jç=‹RÊmþ&“+óq}¸¤ÕþGe¥"!V$õ]AuBmHºSåqyŒ>êß“èŽ–üg]<úAÎñ‘_¾ç¾&‰>òoò5‰Š‚fÁ/BÿYAo‘õ»ãÿÅ?^}ñýXä QœgUM.º>»x³º¾y÷ÓÙÍOïÞ\CNÛX®UèßÿAþ‹üÝÖNÚTqBWÑzæY”¬
(³U¾]%t[¯
øÞ wÂªUýœ—¶ªNu0"˜~»%Œ\µÁÈe?˜¥¶6QR(EðDI—(1Õ*”Yž¯Ã¾÷–ÅÌ%Å³$ºU¢ÛÓhó”9'&ç,o8Â ¡¯È5<Èò˜ƒœØÆÖ¤ÇD=Žá}Xí@JÏOþäVîh–“‘°BWkÈe!0Û•y~KùïûêÔÆ¥ÖÓÍ¾,`³MèGª5'²Ü«¨D%S¦$ªÅw	Ír§®|’Ôùëbm¿ŒR 9:ûãÉÍóg#JÔ$uÉi–/
?Äy—ðñá	ð™½©0^œišÞù4y•;J¶QvRí£‚B6mÕª¿NÝ(B¹®½VÉR®þ"ÿ *„º’@ÖáOôc]Òä
õ)/e^éñ,r=þšgüñR‡Ÿ=m’WW€Þþ>ÂzÇÃÝ_Y"Y”Jë¤ÕðXm€¸š­€w–²¶éÚæyíP•B^‹ äRi›­ïzA†‚’!ebD&Ö6YýÄ¦´ÔOež’À³øe™¾A]Gñ^x P~q^–´*òl£?éKÀ/´)sÓñê	å5šªÁõ„XÚG<ÊšPwþŽðSR9ƒOVÊ¿’MÉ8»ïÁïã›Ð IAm"Ÿ<Gò'åý*áÉužF<éó	¿­Ì*ð² SP05®€¥©”
FÝÂKø"¢>Ò¶gùq„¿­üEp6…WÝ÷»m°ûÚÏ£ähbÏ¸ªÝòTçÉ(p¶¡¶¯·ŽÈ,•U.ÙH{ýŸªðB7UòC/È2•ô›RI?TÉS	ÿøD%Ò][Ö˜HWí^­‰tÓ°9A¡L	¥ƒìQ)eYƒ"_â^-ŠT
6)¨”yJyø6EõÂÌµMêœ%¢»lÆ8ÚkÓØÖ†cŒžY	L‰âzŸ7É†–Ë„ÑëÛóÄ¿!‰êÑ>ÿú%ÏI×µ?ígºõâ¯y}þ¢Ÿø†TðÑ¹¬â¨€h=¢‘¯FêfM¹¶ Éõéä¡³º­Ç»öWÐ-¥B%7ý÷µî‡=ÿã¿þyòŸÿþ¯>{Õur·Ò«D¯ôkkà•ÀÅ0ƒþ-¨úk•¥ÖÒ§¶Óí 4tüy¿ÿ˜œýi´ãß¦³2nRž/¢Çd·^ «H¸âV¯@jÈ@¶Ÿ[h	çM¶¡>]çM©µ9Š2ø"’/99ñÎjˆ¡ÉD™sÍ‹‘ßìŽON²½™«'Y	,”lcPQ¨¨ƒTTSá·˜-8ý•5ƒ)ÔSmo6R7¶½­ª6˜ÑN’™ÒÕ·Qüž|%(§Ë´õæ£üÌc=Ìç29ó²Ïšx/†‹ww˜d‹Ï”ƒ£æ‚¥Óröç“›ç/ |á;žIÙ·v[±v)85Úiëx|¬ù\%áí©±hñ¾ ¬5­"z¥$#§;;ÝÈÑlÐEüÞëüÉJ$Šù;ç=ýHþvþLú„¯ÈÙË“³?´3µ}÷°çVu¨d”]EIÑJº'/@–W9ò%Ê	1½ùX@lÜí}|è'D)xãzØzÍ¡Q
5e|þZ‰LÎ¼K7›Wz¹øµ‡ß±r“Ð¥
’Ò	Évi¹†dÓ„"B}î"Š[ÏgVO©ç(-è+Å¦{…½%ôíÚ·ó‰jjÝO]3×ød†ëpÝÁ¡¬;pHkt(Â!©9ƒ)áp6YOªÉš·VÎ+°û7Z¸Z[­ÃjµxŽö½¦÷îëÂñ>ª8¬¡
‡ˆ&ü*š7âçù¡ŽDG,*öe´Kr±Øª°Ÿÿ®®úù|Vý´À<èÒª*ÆUÄÿUàÁÅ5tLÚúó”ÿëÚ6³ØÖ‘rìàmë)Ò¯hr•¯ßJ	ß*EèzWA«Õ‹ÕL£Ï–I¡å€r—§åqHâå|I¼\,‰—(	”ÄlI¼$	1¢&Ç$W&ŸIœw¦äÒDÙ#‰^äÄŒüžÝ¡j¬)
á „0¤êA…°eeU¯’&]—<‹£»”¿ã¶äBÛÎÙž,¢'mô¸/…`	aªÐJðï±täzrs¥C¸«Å0!†@Û)¥
ˆ>¥ô’òª¢ySÍh"®d0Ù¶©`ó[•(é'úÛ5JÉç/’IÆ‘\¦Úß»ÌlR|‚ùZTÌa+&TE4Ø®¿.é-›hbD8k7õ·"Ü¬6F7·íËd±‘AÉ´’™IÙ£“Œëœ‹9/3rÖÅÉ|òy(™§ ™?ìbB2#žÙøÛL»fã¢AßU3G5Ó9ó©4ëuîßÖüF‡+¡lž„lBµ6%Ë"Ò¤­_ö¡<jy×Ù·-åÿôíÝ"é%ÓúaF2Z’»•^ëj[JÊ·@|e&‹Ì*/p@-²mY ©õåz‘m	
³X0=äV1ySÖû¹ÓõÂxá|½ƒö¨¯"Æ°
®†‘½#ßÓ½x‡pÒ1%ˆ@ÝvµmyÅ7_wmƒt³â¨,ØªI²š-[?¨ýÎ?@ÀNÐ²í;ãÉOf@K'z¿4O¸k3dx‘0±žì¶óˆ¾"?Òø=*çP•3›ºð"‚âä¯P®àé<ù\© ä¦dŽptbÄH%ƒ’qKÆ$-¨X”ÿu&G5™÷os”_†*h‰‚üÜ=!-kvÔéB÷iwÔÁBØð l–È&`ËÃ²­81c•¯öKCÍãƒ’<Û5Õ*Î“„Ù²9W!É[Ò<GèB„$gý–xtÒD%m($“&FÒ(!”ÐÑ|îXHP¶)D6c3ä¹¶¿²þ·ß‰ÓøŸ¿$ü<=°fo>×‡ð- nF%L)áql6ö®¤4å¯L{óŒbÞÛ)	½¥àRêM\âÐau‚½yG#ìì	zl1Y'S¨="Å$t·L-]€EJé%„*A•L ö8¢gë—5*zrõ^­Šž½Çf3G0lI5Kù÷hY¤Z°iA¥ÌUÊC·-ê0dç’—}”$MÌ*µsÅ–‹>ÕÙµüàTí)ðèFßþáZö¢'fâŸ2ŒâùÜÅ³ ¹ð*ÚEó<Îhê8@Þù&ß»BÌÑŒ3©ßmÒäR^Ö!¯(Ñ×˜€:îäÕ[š6å+rÑËhwÏmçVNwSNÕ”Û(öÀBu%ÐxË"A–ú¢=:÷,Iøš”›CKê uè;Ï¡ê{K@…y\6òB’÷C)&!ô
$^W `ò>£´»˜Ã-­¶æ%¢Š¿~~L®_Œ]arÝt÷—tª)ò"a5Õ²™sÙÏ‡üdM“„Ñq<”ÒVŸù¾£­Hœù.n$Ù6â*˜&Ûœ€‡&ë^4I%ªœ¦ä¦T™$j™&-àÏ÷PD]2¨^x{µ+L,:5q#Ã€ª0sT¡’#Vr¿›.ø”ÂeÛ2Wáèk¯Ä?¦&º¨Ô<$ZóKyÊHHJ^ÑóŠr†Ož0Ã¸Eõ6¡1@&¿0¿Î@£Æ—ù¸ô¢®®w'Ty{?MÖ Ç+1[+K]W­´R÷rqÕ%R>©¼“¹Öw*üéäì?Æ”òpõ5¹æá5¶@n¤?ð³þå	]Ay/ÛòIêf_RzÂ_Šöãá–”Œ646Rh£Îyû-ËˆKšS>7Éo¶¨*}Ÿx|'b1Õ'´)ÆÒ°…®™±Hç~¾™±<3tÎ&³1è‚zgRI‹Ü3ù.÷ñÏ¤nÐACíq;húÂ«Eš¾óê>.š¾ö
}4ôÑ>wopÔWÖúR¯¨iX.D¹ZÁÂ#™I
ïÎB?l±‡õ¾xÏ_Ö6½ŽË@¼Ã~ª¬ZoÑ§n¬£$v”¸øIÓï) ñ_‘<ÒU7ò{¥Œ'úæÿ:¥q<Ùëðù·xz2û;fÊàÂ0ž'3éÖ "zÊÂ„ÆF	c¬YP6sZmº¬¸ÙC/ØÿKF‡—HccpÌ›D}¬ê×™œQãkÓeý(êXË$ñÁ+÷4ÚeSÄ_6£Ä›Ñ!ñH¼M¼„)$ñü,áIäM£qæM[„¡@/	@}óOï¡Ýzè¤Ü²™¢ûTôTßðÙ„û°áVd€º¼«Å¤(?€ªfI´ìá–9ÔvüØÓÎ‰zk>ˆg¬xNÏ¾ž¸öÈ|;xì"}	VëHù‘EP(¸s¹e”ðó)¸#ï6ï-$}»q%?­“ú³vâaäÂ¾[ÓhF8{kçÝü§|#ÂÐðÛX ?ã»¯‡zf?uònMUðW4á×H}E®øê;Ú¤HùaS®	ˆ÷jõb5Ž89zñlæ}CDQw¢Î!	;||¢zæ1rCï¶âþZ­GÜw‡'~ÃÄÎ);Qm?u1>ˆF¾L~‚íõ\ÚÌMy.—!BŽ9

úËIÐ_Îý%‚Ž ûA t½S]Û£G<ÇÖ÷¾Ñ»6å½)ïTË}Ûýžò¢ØÂÕ¿SCñ¸ ø „1ŽÙãQÊÈò`ß+L¯ö)w‰ `–
&ÔrbK0žá\Y¿Î%…w¾¡0ž°0B\ô6"oWÚí©~µ[K:Ù(G˜^w+è3³šÉUùÃã|Œl¿¦r1µ÷C2rbFŽ¢@Q8DaÐZyÙîKpd·o6-„¾5Š Eàçä1`V»Íñ’®v›ö²QT¾ƒ=u®®‘ï™éÒ¸çÉ¹Î3«pxö°tôŒ\·æ4m¶´­–5¸túéŠ"xÛÀ ßÉ…mvÏM£QX¢w„p@ü9'¶Ù]p‚a+„{ž`ˆÓ×OK	Á3*bŽ´à0Ã¡"°Â˜/Œ>¿}}•¯öKã>/â2"oM#Ÿ„­áäFúõ&
üƒ¿OÒÃ¿ekžÆ¸Oô6šáµ.ôÆzÄèÿí6F!iñwºlNû9í8þƒÐCÊ§é ç÷g¸®r1óycZcoE‰Ü#÷6÷Š§ àË+&£˜ß?•;/1¢ÝµË§C3'úÒÚ)þ†Ø;`
Æ½¹)a}suøúÍ-8¨ƒJð*Ád+˜ºÅBcý\™ånÇŒî®Ò-Âå(€£1šÆ:¿v¦gôm	`W1KÁzÄ¶ Ôå®s5qe›Ï’Å œFYŒâõ”Ñ«ç:M×® ³âLìSU".wÇ×Õrxj1p{lŠñîä©ãÊù-wv¢zžzÂlñT
š³T[eÁBm¥\¦Â˜#Œà‹´•æ¬TUY^°NU‰ïÙFüÝø_˜jã?Ý,X”jãKRQsª=ØAÁC“T­X¶…÷ÊK§¾WVäÜ²rÉ@GIì(§ð}ÒÔüˆwâÂ¬Àá0ù}Q³N¢mY¢oG‰è#úô5Q!ÐÏX¾¿ËÙÆÃ¼ýØ»m…G#ãGAàæu)TëiôÑ{Áö÷Ò†\š6NÌ•©ÝoR£Bÿ"€’Jò‚òÏ´ÉË
âƒRã«@èžq ÜD"sÉ!…2;&U—Mz,ïêù(K“ÿ–×Íš–9¼¾uÍ­Šó„å5[sÚ"„Œ£bõ¦gKÓÆ¥Œ«ü¼^“tÛõx<ð!)ÿÖ›ˆƒ­"Ù³BŠãÐ:ùï…¼:ˆR'E6MÉqj@»}­ð¡>i£}þ”“úÇcrýþyñlD3º–ygvTÒ¾':K#7ç„W$U}Lö4ºeâO<®rYWE$9‚da4i”A5¶¹;&·Œ×> !²fÝÀŸiIcQ‡©Ä	K×P2Ö²É2øËÐoéj+ÃdT%†åƒ‰¤)·QL5JZ#õJeyFYÝ}D·j<Ä…¢ÕJbužr]æñ^Ä>%†Ó5¿„½’ŸžOx$ÉÔ€ð
jxhe20ØÇÐ ä…f?–OÅ6T¡‚%ô$¡;E…·IÑ0ÛRøÃ1‘r˜%ƒþ;ñJÜ9UÍŠOgÐFð*ee'Õ>–Ûº@½­n 4Óªø‡¿4î¢q* q „þÒ€ÍºäßX½¿ø"«I|œ-aŸŸ²7¿i3J¿iúûãŽÑçæ™PðŽà‹0ßZ‹ï­‡NÖ-›ém	ÐFÛÉ(Nr8Ü
‡§âbO=~n>s1mÇÑdZ3­è	‚t>~+ñ¹ËÂƒ÷Ð¯lEÐ-Ð;Hãî]Öfdrjó#úˆ¾ý0‹Ô$«üë²jC¹zOP<ïY’3ËÒ/ÀŽzJ
ßFñ{Âu¯…*x*°À
¬„¤I×Þ;Œ_X–“J°£F% \JÐ`VBÍOw˜Õ&ÜX–“J°£F% \JÐ`P‚šv=6±æ›qlb;·ðØD<cå)@ow>ÑëýÑ¹|gØŒÒnF‡°#ì6FAX/£
|	xƒje²hß’KZ7õ={3â)ô¯÷y“lh‰ð:ü¤B( ^FäbÚÑï›Îóôèê£¼Zp¡õðjPK‚Ví8_Eå|hßBe½8ëŒÛžœÚ¶.=èG"ú“Aôè¡|X…ÓÂH7@çuºÐ®»ÅN ï>T ¾_
¾*¢¤ ð²´Ý“åñƒ.d r¥´›iÆ½!•i"Ã„P¨ˆQÀÂé£Š£B¹ûÇ:Ë×–Ñ˜ì±?€
° q
Gý-Mo \ÆFÑÿ+XrÉ–cüó¨‰56 ˆ¿© È³ÝŠï{o¹Ò›öÜ Kr%-É…eéÔ  ¢&vÔZ«AÊ(†§%[aÄÀªŠoœYA«Äj_ï ³#g¦OÚÜŠý!Ô@OT0¶JÔÈíŒE¢†p(Š`†‚-í«`tº¬ŸÝ9“e}àTª`†
N”‰#ã&¡ù>Ðr÷ôyJÈ‡t|ä‰ca—ÂbÆ<˜Œ
§Árr¡ Œß%#‡²]ÚOlÛFXƒ#ÜG&?¶Zd?±˜G­¶&³–ñ¨(	.àAÖ‡¬P
Á<‹O_ñÃïÊÌãµ¼Õfäeæ¦^[Û‘â‘%HG¿ÍTHüÅäiüÏ³%øÛ‘"þˆÿÍT üÓOþm:íÈÛ xô€ºàŸ<«ÚëSÜt+«ön‹QÌµ±å½.BÐ
t¤‡'¾ˆ’4*Çï	ºR63.ÒÑáÍ@ˆ½{‹§ ÐSø ™ïÐÁ+û©tÛè“‰E¿ü0ÀÖP„A:/ÅöZHÔsÓÏUkÄOg¿è§‹âè#‚> ) ï¬d"AO>xìd|`…çÙ#ë6ë-$(—’}ÛOŒÛFxc3’}dòìú®J#×ÆCÖ†Ž"ÕG= Î‹„ÕÞn¥ýÔ‰µm„ÝJ$º%'Òê"±Y‡Õ\µ×Ž-8®¦»«¬Aø5àA+€&øUm|Þÿ—&Ú”‘oµî•2#ÿm›9U ­‘~êØ96‡!€NÈ¯òˆß:û³o|‘?'—ýçNÖ…™Ž» ð6ðLHoÖWS]¹,œ´»ñ~„Ý€½I`Ü½WS™œºšªð#úˆ¾ý0WSqVùf¹Èwkì•ÃÀ½m‡¼#ï6ïš‘°¨VôÚhN=ï²Eì{öajùvdeµ¥©÷ÜÕ¶{M¾3­\ð·Q+JÜ­äkòD=<úò$ }Æ*ÊäXªS ro¸>œZ¶.ÈèõÑÄŽçfQ
Gcl„:8ÞÓ$X¹¾°gHb j5áÔDKWpQts¿þ+óÝ,Ýä$€%nxÑ¼ Êä‰ÊÄ"í1‰Å»üÞÿ
S‹ñýbY²4Å‚b	³Z_‰e¬ß­²<£Ó­Ä°°Ç=ºPn”~í¥v—ŒB1E1á7‰AŸžŸ_?…£/Z!»2æH“(v×MÒ¤nþ¿*Ê!( ÕO’HDsË"ý÷îÔrYÍÖºYS.©úÎ¡~F¶©U	ÝLÅßÃ[+öy[@–J£Z”‹2Û³BZù4!>äÿÈa{qL.^Â?x6‚½¾{'feÜ¤<mùñ4ïw>Â¿eÍ€r*ZO_s	¥e™¬lê}›yÁhû®Ð…ÿ“5;Ñ¼– a–RQ'”sÀÝçé:g›1H™Ìpy´å"gôÔUqJˆ8î¯¦Xoþõ¶ÁR€zºÅÝïÄ´YœtZZÜ—8)ˆûSÄ=Œ[R=àãYásm?uA>ˆâ÷óCïÏï  dC~hÖLõ_+«Yƒü:JÞGà}ÀÛ<Ÿ{	¾Š]góÒ°…ÞŒ‘Gä\,¾gþÊ6Å~)’äyˆ
 ?MYJSþªyå«íÝ6NìÝ¦ŸäÒc—õ°¨7	ƒ<y8ÇnÆ¹îÎ¹§1Þ’ƒüûù·©
-‚±[ÍüÎ¸&Ð”ÁÂ{QOSÁî	4„0zQ ‘á97BÀ«Q	s”î®@Ž+ÿ´l¼'04ñ±?´Ä¡}„¾}HÚK¹•e||_YÍß×ÆKÇ÷=çï`Ç÷Àˆ·X
}·ØR/ÉÇ¿[ÿvnÙ
¡[fi'ƒ‹Pa){Ñ«çJäÚ²Ÿ);”JdD"š² Éß™>×Æ#'ø†Å§¥ŒˆâŒ 4ÏüY4ðƒƒ>ˆûî`ÀŠ%cÍÄ$˜2š5¦mqò©÷PoÒúÑI¯6Ÿs&¼Zì|²ëÿ  ÿÿì[sÜ¸Ñ†ÿ
.å*ë"Þ$•²®ìÙµ£Šéóh·r7ÅáPÄ<Œywþý×8‘€ ò¨«²)ÛÓ@òyÑh ÷?÷ñ>tÁ”ü•îà96­+ùÚmg…ßmþÝðçM„Ç²‡Þ’")»mM»B´…^Už<ÈÍjÒ„r¶S¯Þ©Wœr£<³ëà“¸FXš5=mVø¶»^Qý–Å²K÷LlK£´®Ò”B7'Í-Rù½¤2¯Å[ÒÒ¼mx{ÙNÅž1ièNTRW-˜A³§%û•‰ÚÐVX\÷C)r_¢è‰ˆ,”t
ŠÇ $IÙ-VõQmJ\ý›üçRìÈTSÙ¤N
Êîkõæ|õ‹GR×ý=‹‰úCj÷Çš=Vÿ®EèÞ@¬‡ ìwERQ{åƒí[Å
—÷‡àyG(ïò&f£,ùêá´Ðôò>g]D |Ü6¯§¿»å‚Ç6£—°y‰ŽXþA
Ôƒ¸aá†Ü0DÌó³)G1@?æÞŽÜüÙŽ¸i…|#ßgAàî¶<°uÍÏO~¶Â=±Â„ë<Q¸nÒäÀêqMÙØ,tOç _ï«.ßeõqL1{*lPÄÀ[7Õ6§_»ÌA¸E_ëFvÈ¥­Q väû¤ˆ¼‹Td~Ü?k6^Úõâv„ÝÄ(
ë”<ç¢\ÿÕÁ·n„G"Ûcx¢P]'|¡‹§ÿžZ8èž>: ÇÞûÄØøñ”Ãël J¹ƒ{ IÆ²Ü'öØü–’Âå O¼ñ¹(˜È‚‰V°B_°´Q	L§À3=_œlœE“ÅC–ÓÍ!a—•Ô'‹?ÀÜ†Y°‚‰Y0FóÈ¿¨üžŒÆ·ì÷ùtÆ¼˜e¹Œ1ìy!˜÷ E£Û™ÀX6n.{±¤{Iêb¤û%Ñ'e1_w°Iê#¼U×€[fsþÎ´±RÎM'Åa°‚œ›EgÝy\­ÑÐ¹kæ—Z‹Ü¿<îãVË!u/óºüì$—y!å.Ê#-óÍD{+­‚²×¨"g¯ñíÑFâOŠx“§ˆàû“u÷-JÖÝ£¿8Y7²ÿâØ˜¬^JÙÀ+kº™l·ƒaPÂ‚QÁ‹s8"z\apØ[HúñàÃ=°”L}ÆÇŠƒ?¸¹œšÙ …K¡OJS‰àŸøS–¢aŸ«Í}Ð_™Fä'âù¾~ÏS4ìÅ¦}?õŸôfqÈ<2o0¯hú±ÈWåý†¥}ØTw‚ÿ-?¦y7îét]Ø>Ëx}Gxëß‹cßëö¦Øe<»<C®Q1ªùnó›WªoÅ‚Ïû\LóÃ¸en¹ç‚¬!Ôl¥uÊ¢N#‡4´‹äs²ÓOùæonW%¦TÆ¢¿Š°M.Åc…ß‰ÅÓíÜTßà»|X­ˆ”×\ Ò„eâ~ÏòmõM¨é‚$TÝ6¤‘Ÿ»¹­GYBUÚµI™U ªÊÓñ·×dõwßÁáN‰·®äÌÄqû­:go!eaëÊe:Ž†eÒ€×šˆ“ÐÙÉàI}ìEÀ»—š=õ|Ôƒc{)â±ô·ÿ(ÇØÏêäƒnª£ü€ÎãlŽ±ÈŽ¤­z’Ûúq®DVÃ—ÐònêK.Tø*†Ü?û®Èj–¢ ’ZxŠûº‚¿]Hÿï¼f›åÐYi×Ø…vg);Þ¬4ÓGuy™ØÜŠì7³?åúW›Óžºâ'c·±¡wV®Ä¥/é•ãøûùê>¿ñ+óˆ½8ƒÛ¸ëÊ]¢^ð«qr§Qb%Z§]ÁzsñÌæÝË¾Î2å`†rFf—åÌ‡ðŒNë™Ä3být_;èúRèò„ÿá•Vçì)×0¶_‚}f<"ãa†AØO„iR	‰Â4©,Ã4©`†q˜7³Q/"Y‰‰ö?"2ÁXc±Ÿ7³´ú0F8ñÍ>Éó.¥LDÙÃÔÓH`´ñÌáþÿ)¯1¯4´TÄõ?¨ª‰^õS4…Ÿ	v§Üõ>6Ý'Ðî*-³ÂòéÜvmèÅZÑws=šÍIAG1H±«M÷£²›vvÕÇí4]}—¤Ü8Ha $>ÀX…ç’ÿÂºçwÐ'çyï\HÍæbàý‚ædªf1p©@4­H1À £æ$$l]™¹²Ð’|)³lnÄ"–,)?³þËk²~ãs4kŸ¡˜CuÈ)ßfš´¹…ñ
øçœf2ó³xì)Ý)_rŸA³ØîÍûa°nÛ9ŒQDÃ:.çþe×q·Ó@§Pò‹xÓ0Ž¹_.‡™hÌ&ˆ°pÌ&	ŒÇ0;™xLŒf‰aÍS"21¾ÁC²ÀÌ‡\Ì˜L¨hIP&îäQ™Ð†e–=ë°,h–Ìª‰Gf8S†‘Ù‰DfyWl“Z,ï·q$µÛ¥\ñÄÂfûvíˆŠˆ§"ÜûÑ—°s•hvªÎ™¤ÒÓ¤Q’ÕÈ–\™i÷,ª úÆ—˜Å'òCe¼ e8øú¡¢Ùàõé°dÇÜñh@oÊC¦	×gÄÞÉ«ú•C(²J}RLUIÌ*ñs>Êå,Œ·g$œCÃªÅÂ¹1®Z$³J
gF8Š·¨Â#ýÅ.GöësÄxj'\;âž“xBÝŽq+ýŽ!t<(ž¥â‰êypI²Çë.ÙÜÀ½÷\Y.p†UÔj¶Šp‚Uâ,ª>„sY"¡òG(D¸”JdN"SÄ~¬F²Ùì ¦–²¤è´ ÃÊäªšÌ%_ËKÈ¯ü–æ.VˆŽ.1U¢®•QÙ°ytålÐ·‹"9Y‘Ì#öœT²Á¨’1¿ËT2®U‚*ñ"öLT"WU.r&rmÛc¼‰\G‰î…2#”²g¥”eEÜÄ£<ŠP
ºTJ˜R~¸O‘ÂÛ™¯)r:nöõDNønùµdì“P§&J1©W_$ûPŒ«¹hÿÖCªŠ¥»MlÞ ·™œ˜¢ž…Øºëé`WÃ¯4ë@)èU<õDzt'.ÁXq¨Ïå^÷ >U†xe»Ì`Öø—À½ÎQLÜ½.@53¤çW¶Ë:|/îØÛŸ&õñ;ù"¹/g©ÿ¤ù©×Dê‘ú	õ§¨Ô³‰¨yìu«îucÁŸ‚/‰A~™²—ï"ÞøÕNºa4Gø;>zýínFÀOp‰F°ûÃºSvižÜgÆûã•W¦¡÷Þ~R0.ºCè­@Eà_¥opMÔ¼Ÿün¥}ZvïHú™ÉP4À+‘ÅOùÄÈƒúÄ'ä‘ù	ó=%Àï³qmÄËµ“¿êsvÝjVVô‡_z‘Á‰7ðüî# ¬
¨Òôxïµ®ÌŸíÌ›VsýM–?Ð0¿a©²®@ÒOœtEHÄÙ9AsAüÊaå Þn<ÇýZ&—CÜOwÔï(Ï°JS;î¿š?[9Ÿ‚;ë‘ñ3ƒ ˜po6o63€“³7¯Â ["èº	:ã#ì*™-›}?Ð.{×Žý¦à®Ø5ä³¼&d)YŸ;—WGTuW–ÍMåàâ²Ó‡´g¤ßÒ3×M¬Ds©W"£h‹&ÚR5C4<ïw kù]·‰Q<ŠÅá‡äëÙˆÂ=â°7|vøaÇ’±
ÒÄœhûâg¢mU‡¶…Âð	Cã+º(ªzø¾åÄØ.@cs
Á)Ê³AØ¼oó¢áw_	Ž¼QK”ñÝ3‡–-;§ÔÇ#&µæMÁ©ÛÓBÌcH]Rr}Ã—xŠ^
Ë.Ë{ÁÂˆï#(ÀáÌ¢Õ7øR·òÁ(#%M’©˜ðeÓê¼$›V/†GfÓÂÏÜ/LñkMU+-I¬5UªQÄ5^ªáÞÔI"nQ0+r­[9ÅÀ"g7onw€ðŸ>üc–"@G·¬’™øèƒ²
‰‹ú"ÆC¾Q2ÆB§A¼	RTâ}±ÏÐÐ€˜g ç…üð£Å7ø-{©óäßêf3è…"ûÈþ„}ITøá¹À¸7IÓ¬á†›~nGÞMíìøsK±˜„Ñ·á}}Sƒ}myˆô-8Ùƒjp«A§+ž †ÅEÞ±¯hô°è#d,®áÒ	Á™—§ç ï€ØlvÈ¸Ø”Qa¢ˆ7J6Eñ®+wÁº¸1íÃ¤1©?£4ü€=uŒúáà jm»&L%ÖêžªÀ(«‹ÂÑ6CÅœ b4àžjÜ»Bý72»;Ô¯žÿå.QTÐKRP¤í¢REAË¼å,Yä-Õ‚K¼QAâˆ¿À[
"h…«lô’õ­RxV,JÀ!øZM	ø„%‹YM	àRVE°(¢ù…{xôà›š-ïàÎªÚ®‡ÒŒ\fV)¨B‰Yèœ
>æ]ËÒ”æÿbø'= c8QL˜Š‰?ï_çñ_f~üÍBÄŠ¿b*
þ%­öÇŠî\Ü›¿;€7Í0­1r~f2pÖ£B÷^$º‰ý(ŒÈ'ÝÈŽº´5
üŸôì^ð¯¡ xXyuÈØ«ÚUuåÁƒc+F²=eLÀ£ã=‰h%ÛkÒ$iÝ¯Åñ)ŠÊþ­j»mVWp7ê” »2.sZµtËXàxóT¢Œ†¶GEÐ]Vt6uÜTßàöº|ØöÇÊw™±×­IÜ²==\  ÐYP ”ýûAœèÂD©ª"»®fDuñŠA™KK*Úèï€ý
´^ýí5Yÿþ{óÊ£ÕYó¶S³(a?ž¡“[hsÎ:“¦}MöYò@ùŸXY´š.‘à*£+’º²Ýñ5y ¬‘-=d;øsVg)ïG¸ZÒœ[x¢Ôº+KøË"©d;çŠ×^)š_(šéÓIWß%i¦hR2i¿e™x¤IÙïÑ.‡Ÿ¸’ÀUÜÃøÕÜÖUºç¥ÏéáÝ–%Üˆ·Ï¾‡äùQÈ@²¸€ŽœM	fœüüJuPø§Üß(5t—)-4ðyvžg÷§gQ<›jøëk"¤M G~K,N•ÞÅ%‡¸
Ö«Ü%åy³O ç¾;w«œCÆ£‡Þ þc·>žû¨¸ˆŒd_;°ÙÖìËûço$¡-IÀÙ"ü}Ç‰÷üœ&Þ`ÙaâOW †H?]ˆ¤c#N‚wB«2>¿Úy7Œæ75ÀeÀ÷¿Ê?ƒ:à’dCÁIêêÏ/õ­\àrÝs-ù‰ƒu5s¦æ¥ÍÄ…øÔÏÖDØMØJ¢!ÏÞ-m6)<Uw¢ºË‘)Y¦	È+ÌÂç¤ð>I¿€Ö¸3TÁKPVl5ä]±u§×š|e˜Î«Á,Õ€j°ªA¡[-Û.ænÓy5˜…£PV5(´b¨A~—ðg§ë?„„d§ë?u,ÌN‡©+^øJ1™g_ÃœCbÕÎÏš‘Ÿx½@Ÿ€‡÷:i ª€{h6:èKòIçÖAþè½è9ü×ûªËwY8yL Š¢‚a3áF¼d—Cr«:40²×VÿºQkgÐ¼T%LÈŠ%®Ç€ðØ6p¬]‚c`”ƒW¸"(B®$Ú@ÃÓj“ÔGxÕÎ…ÎjQ×ŠŸ¿3­šPK•xç“
p €rp‚Q¾ñ±jmÀð¸_·‹£c„Þ}´Á1¼-¶˜|sHòC·›õû»\1Ñ•¸‚Ü¨+úm93‘‘¬ŠôU‘iU¨
T…±ˆiÒä —9&T£×†•Wf‘8>@˜*P@E$ÿ!Ë)spaIýøÿ¦L¸š©W¬pbŽŽ %à€*†ªò~Ã¶ÐÀÛœLc: Sr#LÉ•9ãiÕ»BNÌÂq
1„®H‚ MÃöàlÀ=ÑÖ9ZÉJ7tŠAÙcl„:ëÀÀ*¶
¼Ë¬µö†¬²Öt€‹¬Q!Bˆ·Æz¬ÿ'µqƒƒ>¨•€ŸÓP	!Jˆù1ç§›ŠÄCËC!Lô¢°‰„ÞeŸ¸IÈ·2Q~*CÐ' kÅàü˜ûÀ}2¶ómZaOŽ€ŸE€[îU™[ü#7-°e?²P‚~wï˜¢pÏ
cŸ¸Xª½ºtE0×ÊŽüfØ9ÈWæf±˜0R€IUT	ð¥Ë¸,IÀ,%€°H@QC…/²¿.{³Œëñ3Ÿ`ØK/›þ(áÒ¬?eÃº²6}ÔáEûiÁn¢úC’I=snÑ4
9°Hˆ'!únô¢b€ŸÁ+)ioÌŸí°›VOJO‹qú‰À­¨ˆ„uUóíºP«ëä¡›ÞŠe‡ž9xh(’hEâÌ$Â>E)ó´¦¼FW_>ùÝÎùÄ³ê#ïÞ{Jb.V3;A7¶snZáÉÒH÷™AP¸ÛcS$N¶µ_]hkF8³ˆdŸéüÄ »:ä´u5ÍŸíh›V8ÔDªv¢`-Ï7K†sÓ‡¶$Îpˆ&ÄAxtà€+†.Ø)rlÀ×.ÙÕ‰s¥ï´#ÿgÚÙ• Ì'Å>unÁ‰ˆ`Tú›*a'ãþ×9÷ÈÈ§±wn§„ó1ýú§´wÛ¹³nl&vâm–x`¯?¦$òlÏQâ<ØóÆbáÞ4DÞ‘÷	ï
’¸÷Ñöæ.+Ü™þú‹|ÐÍ¬à÷…£P\ï‹ä÷äO˜Š€¿Ø]ª¶hoÔ÷vˆý†j-yg[¥ *P›¶‰YÎà£Î¼tÅ…LZìrF»¯LëYLª@] .ìºèùŠ/Œág>Èhþ0“;?EdˆdøV°hÖ¥òR¥b°ö¬ã^¼é¾‰Ù¥œnÁ,YØ‰‚AÁÄZë)ã‹ËF‡Ä¥ ŽÂ½K+¼
PAëp$<©$%ìhxèï./×¯øóQéþÉ}]w¤­H’¿Û.ï
»Þ'MÆ@8@ ç	/æ&êïC¾\VXK·¶ÛfLVíÑ¢¶ÑºÜ5œ¬<»©ò?~»–ü³*î ÛLµü¹H³==+—.øû6°„{¿zóš\ýÿýõ•}uDJë´+XÝâå)æ.ÊßÓCV–ì4->ùBA|êBxúIYŠ§Ý÷ç˜ö÷
CSøÙÒs…l:¦EÆû…:ˆÝ}Ul+ºóFCÒ&$úQ¦‹¢oš¿ñùtØ}Ÿ@÷­Ñ£»î‘÷Ä3}#çã—ù%ñ
"ÿ"‘¡4p äú¼6¶‚>)äû…$ˆøÏ†xPº¡EYÙÍ}	XK³°o ªPœýGèÐ›DÅ„ŸÅÎ^5ô“fä_/±GìMìM1¡ïgg¸¿1íüèOŠEú‘~“þž©È
Zd»Ùªqöúv#;úvÛ'…ø8Œ=1òuF"a¯N\÷Ñ°YÔ0.k@x4`r]Þ£«ô‡œ]¥KaááU¨…ª…x‡WibðŸ^¥59èø*Mx~ª!H°bÀ²—KgFS'ÿSSœúGðÇà„D!¾»afæÿ¥Yàü¿²^:ÿïHî€ƒáS£Þ )&øÃMµ†kFÃ¢¹Kã¿†Õ™fE¸àÅ1Ç”³ç!µ”1X&kã‚P™˜¡LP&>™(ÎbÈ¤Ê	#ÖÚovø5“§äïDÌOsNF¢'…–Mád"?‹üs˜‚SÒ¹³Ì×Ò*ì#™2ÆdH¾‹|§¨àû?Œõ-ú(Ö£Äý9ö#~c§0Vðwºƒ'Ù´ÎÜ·k·¡] nûï&ÞFx2{(à-)’²ÛÖ´+D[èYåÉƒÜ÷&MÄ!óížÖ;õšSn”gv-|·Â(K³¦g£ÍŠßÁ×«ªßýXvéž)ƒíŽ”ÖUšRèí¤¹E.¿—T¦ËxKZš·o/ÛôØÀC&Ý‰Jêª3èdö´d¿²³úÚ
‹ò~(Enq½ƒ‘…•NQñp„$)»Åª>ªý«“ÿ\ŠÍjš›ÔIAÙ}­Þœ¯~ñÈêº¿g±ÉQHíþX³Çêß 	]Hƒõ@þ®Hê/jû£|°}«XáòÞ¡ñHïèåÝÞÄl”žY=œš^Þç¬›Uç@ÑõÔÀ£<V…ÕYtDsR¥>Ìè†%¢Ž¨ŸYHŠû1÷wèæïÌM3d?3Šx·åQ®sú~ò»ð‰ždlñ‰Ãv“&V‘s&Çfâ"|j9ùz_uù.«'˜cRÛ“á{ "
âbÔ¼©¶9ýÚe.ÊåØúZ·r€."±CGà§(Åd^¤;›Aþ³fä'^/Gà' Åáò“œ¤ë?»×­ð˜-ä[Ã'ÙuÂWÅøúñ©‰‹ð©å£tìÅOòŽ¤Ãm b¹ƒ» IÆrì'ŽXý–[’Â’å?Oüñº(šÈ¢‰Vôÿ  ÿÿìÝrÜ6–Çïó¸lWÙ•u<ÉìÆµ²bÕ¸FŽµV'5µSS]ìnJÍ›ì!Ù±”§šg˜'[€ @l[ ¥sG/’ÿ>”üQO+2µÏÝ5÷ô˜0)-¿Çi²:D/KÑø•§dWZÊ!4 h¦M£{bÀ,© pUR^B‡(Ê¢ ¿Ê4z*R¯%Náö¸É²y£A“¥Â}"&“ÂŸ”ÂEJN
«H]ÕnQ9$jîsVºHÛ+.¤õžÂë}µúnå¤y¶øî™îÛéIû¤}£ BéÀ5lÙûÝ®vr#¥[•Ê5/U½&w)“¹ÇQ…zÇ:öMª\ª×Rü#qÂë¶ºÅ	¯åï'œôÿôô2N8ÿ,YÉ?Zy‚°lRºÅAhí
Á2Â'o„G"}ƒ–ˆŸ?D}ªÃÉØ¼~éØ»~:£ð±Xf(ö¤¨˜$þÇ!þ¾šÂI?U÷®
ÿRO5$û^‘tE‰_­¨pÒÇH #Ê¯%¾^ éžt¯ë^ééAe_Æ®ƒUzÜ¯hÝ*¿Y¥ñMµºÉóJ—ÿµHÌ.Uböá†]òÄì¢•XÃ +`uð¡Ö®`Ü9ï»Ó”÷‘P0(«à4 apÅ‰öäMA@Øh„‚ˆ/„Lœçeç|”ä`*®0Nhd>«!«eíj?Ÿ¡Ió#eTesBfÔžØžÆÕ´Ø ùLV†¨yäÔ³4à¡6…W*þToDEÒ;pÍEÀ®ö
eEÞ¤wÖ¬=t*xÑu(¸:ø›½rŠØL,KÎÒAÓ6çu§JêAÛŽ—káè'‘©é’Ú–þ¥•ÉLVØØž¤®µ+õoj¥%f)3Ã2›-8^óÅèD^p¤FÀ0ãÀ4BAŒÐ-^jÛC¦Ëö¿k'œ.ùèTà>Æ`O³¼ÂSK½yqÜ;Qq©%v¡B¯€¨ *,T(y… BL;øÇƒH3`,xéoÊj]ðj³b<x©2±s™‰½éd2S"¦u…LUÈºÒ"âdThsâ%Í³[Û˜í).ÛyühéTG°,c2ÂŠÚ*-]¸êÕÒce«©‚–´ˆfa…'bt«Ûr×Õ«.´lEPŒBv½ê¥ûöž¼Ó~È•È4m?+¤ýâd”“a™Í†–QSb|W‹bä…ã
L`û¢ŽëNp_©úN÷_1Ü^H,Ä’K.âAšßecì&®£¹¡…c"Ç…œ©ÍŠ™¡¥cës8¬[‰¡ÅcÆ˜ «Ç\q|.GÛz`ðwXrëÂ%dªA&Â¯©ÉÙ‘ÓÞÉ s"ò‰k»Õü+bZE_,ò¼\yÏ¹¸&ã6ÅÈyÕqòÒlyÙkv]7÷Gà'Úh—œË„fp>Fx:÷ãåÞüqÕßy0:Íœ(—@á7xíŒ§«üÀcÚ\e£T*ó¼æÊIàŠóæ÷8]çŸ°×,*yÕUÉJX¤ ÙÈ7Ç*Ê„“¼º ýûçìü‡gS¨Â¯®¨²^q¾ü”¿€¯·®X‡yP¬„¡ÿ¬Q)
å ŸÝ×ˆ.§€w£ÞzqÐ!ÁGÁ×R?þ4Tnâ}n¸]ÑŽÊE7ƒ3*ZE$‘lÊbTeí	Ã|
šÆ	`dRÈ¤|µ&¥C‹“MéÐâcT:´U!«2lUL:{X³"Ü7Wž£|mã´2ž¾IÙOZÄŸºIu40^¸´Â¿Ìíçp+8¾7¨üGŒ½üö´DÜÎë{ÍÎ6ÿF²‘?²Hüož½f×MÛ¹‚…êQS"_FÛ– '»¸®¾ÜE7âUìŽû¸8–&«Á»ÅX0!ÌtƒÑz{D~/¿ÿ÷¿^ü×üû_Ï^7}ìMÂë+EÇø-FƒJïY‘W¼Ò×­u{™,¾š¿•MªSÚ(;»KÒúig3Ò¬÷n’bsÜC»ðk"Ä*• aCÔ„õŽÔ767W*ƒŽ£âÈnÅç–¶Fá#àÍØ¤ïˆòcmdy‹¢¬±ªŸ’jÁO*^Â1ïX7¼‡)½@B“ãFv^(¡™!–ˆ¥ÇË’aŒ¦ýÝÈá¢WgÀ%Uñ°Ã*Þê,{Úàê  Áß7ò]·rvÇZWuÎÁ«úÚUw‡^MÕ~wøMÙ<iYœ˜×=,öª-³Ñyb-±x˜ãþ9“?oà¤Ñ-WÊË?˜’A>Yšê	l=¿-r®þa³q¶Q>V .Qš1À9¬°(•ø§X¡P=³€Ê†‘j_SjýeÐ0”`^,_•ÃÞãs²ßD-ÂQh’ñÐ7#Öàzve/¸‘=ðî^Zù6ë¯S÷‰¿K\\; LÍîÅ
‡˜Ôó¦óq‹YÄ{±Ì²U–šÈKJþàW”:NðM€á ka8;1’cÄØãa¬ˆ¨¶ã±ÉÅ½R†‰ÌÑ5\ç†=¢dÆŽÁ2UE;ýO|87*±èiŒ ò‚mÏJÐæ&„É(&}‘=,'°º;ý¸óµ:äi
15„ï¥aæßdïîÈ^àÆÙ•Ì.<ãì­R:^ rûM5‚uqÊ¾…´üêIò“^pªdØÉXÉ§r%CÂX–XCâ{x²à°MÎ§[ÿ<ÆÝ9øÁù™7ÐÈÌÜ>`Îî@õRädçíœ&š  YuwN„U³NÕäX@8-Üu÷  ÁN2P›$Ü³WQÖcg©³3ž/³³Ì†K]ƒ
ÌÓª`Œ«8å=gäŠ¿Cþy÷ÄÉcådPcóAcµúnå…\T?‘v>Â„0qÁ43'T^ù¢òj"*¯BÅ•WJžõÎjBÄCÌßB3·é¯,QúI:‡€yÙu/¯ P“vr“ÕÕ³~õŠ%Ùô4¹@=´jýIrÕßÃBµK
×«,—Öï&KQ<]dIdØÉUhì×ŽZ=zÕ˜ºÄ’`!ÐÍbHƒ÷–ø So°DBèK‚d’yÝ_9ŒË˜™|{å00ty%ã@L(£¢¤Å«¨¸¯Ä1øuv¦§ÑQh’öŠ#Ÿ±'®ƒŒBi½ã#†nÌy±ÚEiz4ÜÖjyÇEçLfdÑ2Ú©èø…©Š™^1í¸/gÕÍ"åŒåÑ•–Ñ"½b‚ˆ ‡H©.4D8;™bŠpäx‚-Â
#âÈ‹#‹îf’‡9ÒÈßi ‘A"&€Ú"u\‘ùßñÉqˆŸŽ'èRÏ`Ç¦ãxÜ«èË…×x{'ÏÒæu¦˜+G„‚ÁW˜7;P´tÀw
á?`­FFþCqœÿùÅòåwŒ?O%6‡3k!mž×1lšŒ¡k˜Þ
8Ð\Ä‚*y´Y9=h‡›ë†I¦i›p2x8šs²ùÍ
ÆÖ‰6ðÌy+¶ÌÏìoïž!{¯Ùù«çbeœ‰$m[øöyki¨¾õ¡uo—QŒœx~{wà¥÷íó"Û$Úó^O‚^ƒhäQèMÎ•¿Y{&ºƒôØA÷–cAuHû6)¶iìZ#Š°7˜€Zâˆ8úÚ9:¦YTÏqn¢âàïý!Ý/ðgã!ºsÈÆ~éfÓˆ…ÏmŠJ™V)æh0·pTÜƒŽäððW)¯øóö/ž1<Ä•ÌÀ–íãÀ¨ŠX§"B…P1¡ÒUY@H:gš=LLç8©¿éœa&#Cä¸c×\p€|ÌŒˆæogd424„‹;.-Li›Û4E°¸Êã¸ÿ¯2;úÉìÞgþU#X»tðŸxràÉS
âÃ–eÂÿ´‚•ŽBØÄ:û©HQhÒv
ür+i×½5±¥X{®"BÂyþñ^˜çŒ¿ÊhÃ6œ¹¨–d7áÕ‹?q¹¶Ðq‘æÍ50x¿®¸ñ¿Ñ1Ý Ëª=®æ[\ÿz.7¹†kÊBüƒk.ñ‘åª•Z'ûáÅùEÓìæj­~¡#±>%_#æn‘¥ð¦È#þ§Jš‰aÈÅÒ×6Ná:&S]²s8rùC%Ð¯D·±Zúªßæ’åaÊ)ËcknZ–$IÌ$æ³è–‹˜r­·û¿?•ÝòG‘ˆé‰LÝ2ÈzŽ)Ygž#”ã:‘¢Ä/þ¿¼ßv÷ÖÁÇß’Ã®}9dìG=“˜uÉ¾ñgƒ(/p/A\EXmŠ¤L “A$åý¡@´äÛ Ÿ”þ©ä>†´·<Å#lâ§9ÏœR¤öš‚ëXÁE´OØBÀüò™Ü.YËç“Êæ˜éº"ÔÁ<>$·q¨ Æb·¢¤ˆyåñ-ŒÂà_°é¥ôg›4/ù_ášˆ$“Ã!!’O"«»x¼¦?`/ãžmù¨1É6kâ3ˆ¥ŒÅwqê»ÇôŽ}·£à±ï&Å“âg©xÑÁ«ä*†±ƒ§â–è&2uðuŒs­À©roOviú5ÏARzÐ™&öñc’Ç>ÞQóØÇ“èIôfÑ›Åôðë+µ«Ñèh~Ù¤tÒ·Šþ|£:)ûµ+ß.¦ }¾“ük§=gý×Þz `îúÃ úÿ£mÁÜ¦gyÑÄìtþÿ£’‰È)íd¦ž¿.”é…’êŸªê-2
ÐçK	uÖ<öö$z½¹«¬zÑÏ·oûPþ	û¨,ã*î]r(Pmß° öƒßkL}Û¯\ù è‘ë±±UY ÓàC	²=4Ä	qâaCfŠ°&02q3#?ñ”^öŠþ"@Ðhêk'Á.¨ ¦Â	d×‡4A0hÂS€»ñþ€7–›·z?÷	z©hÜCB_h

±9`U·\Â“·Ü }“¾­Û a.zot†]ÀõÖVø^$bWz"SOŽ²^¤wÒûÂ¨¦ ½ú˜ê‘KGÙcOº'ÝôóA…/=:Ñ?µ‰!nFúÿwÊ­µ>Ý/ãô8Y„Ú)¶Ž$!s+ÄŠÕtLqAœC}éQ~ñQ¤ÄñãikfP³ÿìo}ê“¬ª”è!z¼v¤çOk_z‚õ™ŒOkšø!~¼wªç˜,ø—²nS\è¿šlI¯’<I~ÑÕO Ë`U¶%6"m¥Ž´MÚ¶tçaÄ-zí¼XCÜéÚËþ_Ôš”«œÿÃèæªwÇ?4¹Ø‡v.S//«¬}/ZU²N•D²pÓ[ «àM²>´"Ä±ãk]æÆÓŽÒƒˆOâiw®T¾i–§®–ø!~\mƒæXŸ	ÉH®“’ƒ‰!bÈÛÍ¢zîScˆU_=ëvÚÓ×3›šŠBO '2m5š·©¾4:È¾™•îI÷#“`Â½ý÷·øþŽåjý_n>K÷¿M*ö¾ÊÔß·Šd"Iø$ü…YOzüQå#¢®ÒÇ>Ÿ´OÚëôÃŠ¿ßë'™K¯ßN5Úë·“òIù†^$º×7)ßÀè€ô½>iŸ´?Öë?¸øñF¸œ8/V)¯"©=û,+<—˜˜]BâÚµjx¥GVÀD¬_á@8,ÕÀ"¸R!/ÉñÃB^–C\nfb`ÈHKâjŒšu Èb/~RÉeÓßõ’›c.©\ÈF¿bƒØXŒ(,H&W:TØO<T8&âƒøpÍ4@4ëe·Ç4±o%7­>)G÷“&°hÚ\#ÍEKWA-Å 	:Àã(èöX \LC(ðòÎ„7!9Z.íÔ~4^Ö©¥!‰“Äõèámª–WsËZ^ÉIº&]›»î Â–QúŽ.¿ÇO.ëªIÕ‹Žz‚Dá:¶<"kutMº¶DÛufYÜ•]XÆÖWÚÆs`ZR5©zÑQOˆ]UË4Ã²–g³H×¤kË¬Â½u•Ö¡õÏÝßL}µ–$M’^´µ §¶(A–4öÓ¤iÒ´¹›!jÑKƒŽ·Â=LHjÃ+2Ç`8¯S¢ÓN'¥©oŠfý¢Iû¤ý…]Wzw'V°ç'ˆ;\?¦Ur“låŠÏ~çò²,‘×éØ¹–Î¸ZÞ$×‹càM´ù3p}àÔƒ€nÞûÚÕoSSˆÕóqíË…PgñË5uR?©ha=°üõž¿Úåü÷üK-ÝHÏ¯KÚÒÚ·©)lÏoÓ~Ôñ÷z~R?©¨ç"½çOûu^÷c=ÿ¥–n¤ç×‹%í?iíÛÔ¶ç·i¿Gêˆø{=?©ŸÔ?Ôó‘?ú¬ç¬8Å§uýW£×ºžˆÔý¤ÕÝUNu›¦¥Ëñˆ¨¥Ï:©šTÝwW"k¼g8Mò*YÃÛâ»;ìwu"¶l'2Þ!Ü¤í¨„ŽâY¥ÉmŸ¹¯øåŽ¿.ù¿fq_ñ´9õH„oÔUˆ›‚Gô/ïhu@ÞLÎ·ÿ†D }àyax]©Ð\ KŠ9Ì/£buÃŸ0‰Œ†áJåe—¢ñ/ÛyÙE'¯Ñƒ¾.BT/º]D·zˆx!w„ÏcÅÇG!|ð§Q%]¬OÂJzðWÄÕt'ÿ‚%¬U”M6VgÙ©¶JUNHR¾¦ÊM},Õ4¢°›8	)´SÄ15ÙLÍ*ÜùN¶[ø··z/2N·PX1±D,ùÚ'å…ØGŸ@’ÜŽ’Üi'–ˆ¥‰›ð¡`úæ¯¿ù&¾;äœÊÊŠ]ÿõíåÛå‡ŸW×Ë¿œ/ùøöúGÖ´ýZ5ýïÿ`ÿÍþ®³RZEUõv=ÏÚÔøédPh@Q}O"IíˆÆÂÇ‹îàƒ}ËÅ~à2NäkT²ŠÍ.©âMçKv8S/‘ëáSRíX´•*J¦¾Q‹>!ãÒ@Gõ÷„¥–O­Þ&Õýs04EvÃ~wiçÅm”•Ï‘/¶7»(K6%~h^oEìò}Ì•uAîàr!>i9ÆY™÷¢„ò~ˆøk¹pQçHäDåçcU$ZE´+‹ÓIl*ÛD‡$å¯üžZ}Ê‹ß¬¼È®?ÿèBJÏàíðwoºõò$ðöÖI®^êxóöòUµûF7×
/è ¿“ÑÎ ¶ïú.¹gwVïÛvr6	{DØwI(]¯óí=Œ—`/ëû¾á?ƒaºîþ¬©
ª2,|Û‡4ÿ$4¯)+ü·b`»:ì`Øt ˆyù:¹]Uy¬Ó ‡ÁW˜Z/¦Do’[¶lRkp`LV3p^kU1ÌÊEžWDÊ%eXuóç&?ÕÎƒ‘Á¬ˆ"‚¦Ôho^%Ù6¾[Ýð2âÞš–GyYØE'‹H¢2Ö­ldÆÂŸ˜P"”lú›L¼Æ*ýhºy&á„ÕOÄÓI<u8K Ü‡xòY¼‡x%âG§r4»!žÜ®ô²Jr³hŠU’[”d•ˆ¦Shê(p^@An?œ>B}S`%”¥SPj©o^ •ñ&Ï¶Ã»k‘Áx‡ÑðŽ(šNQ£½yATí’Â‡¡%¤÷GHTCAÓ	ª•77€Žûµ3<­´®à´²Ðà ñ…†Ëg6À ´³Ëzžúú, «39-9SÉéènfðø¸-àsLð[@„Èq(:™¢z.È09^®2´ÉßB‡œ§Óqš¥÷åé¾€Ï3Í‘"bês05O†TÃ½	>œh¸G,ÌÒü†{žnC¯“¬92QŸƒ¨yz2È Ò>®20ð_hšœ§“qš£7ÂäãÎ€Ï2ÁŸQ"‡"éd’fèÑ€ y¸4à“øû4 FäÔ@JÑü¼DNnê!|ü<äØ@àœN8Ï†Z°S`nV¼Ð*^½°moE:u_á†ýª¥ÓPÁbÕõ—ü“hÉ‡)¼W‡hy´Ø
('sBE¦t‡Ee \—É¸XU
˜j·Ï“mŽîŸuº¿R7’ýˆìQ04~“Üp‹°áo²Z-Â$cç2Ù˜9…2U¨§- &ˆ	‹Ü‚2"cBr‰!xøázi¤DxLÂCÓZP8F§Ød×ùB“	Bä4Dæ2“¸IŠ²· <‘³´dA©x´Mv· š,!r"³± xÔl|¢ŽG|œgê˜œ¦ê„ÉTL,‚ËÉØPí8ÖÂÄ4Ø"DNBd&£-yfyt¸%ÏŠºŽ·äùdp&Þ˜ü?   ÿÿìÛnÛ¸†_EWÅÌmß -º‘b’4h<3ÀÜ²­ÔD%Ûåžž~ó¤H”y”,þo6f—KŒ”~_¹(.R†&Ùd\í~'ª±ÆÄ¾Ê¡ÚŠ÷cš'BèñåÈ¦à@ÀXDÜoíÙÆJýhñ1//ñ >ø*rÞ—Ë·K7óÅoÿr?û`?–}Áÿòà<~ÑºÜU§³UÊƒË>L[mß?ë0 ¾|“*Zðü»³\Gß¡ÙhÇÞŒÁî	Pï§^ñB
}]~gëÚý¤Ñ
ý$Æýóvª7ÃNq€“àkfHÁ?­\“[u²Ý7ÅUø«°ø‰.’›§ ‹R ½Y®egÛIå]êK_˜k©Ä_ou‚Ovƒ?ÿY¤ø÷[àœô{B
ôq ÄK0¢‹Rƒ—ª9¥¾m<n±o\"ž;_¼)þÚUXÔ½iî%U¤À³§ÀN¼ÑdEÞˆð3_}åÄ¿Û}«üm#/¡¡e^lÌiø½­Ëöà(dÐ÷*öJ<¼Fç¿j{ÎÐuÊ’/^€Þ¼Úò¥+Ûcœ(*2A}^A”tQF´Ñ‹âš:«ÛÌ›•˜4CƒD¨gÌrZ\2%¶%%Sâ$Sc–Úò%œLõ·Lõ¢ ™‚(³EÉ&™¢¸“)q»ÁdJ!™‚‰P'SjZT6¥ö¥¤Sê
äSðcŽVÞ2‘%˜Q7›R² §‚,óeÉ%©R²8³*uÃ¡´JE!¯‚
©*'VÛ²qme¸3šlØ›#Qð>àO¤°³ƒ;ºc‡`òÃ;HHwžªú;;o
ñ7·«Nø¿iþ5`¤œšªulÙ¼3Û¬ü›!~üßµgÿc½Úÿ ø7¾¢†’{TµMµaœ…åú´«˜ø«wŸFñÅ‡>>8>ŒLñúc0C†,Ñ²xÈ£¨.ù34¾WI÷:"(IßN}©vÑúÐ‰ßyÌXr¯B†Ý9F82Ëo¤²œv®—L÷F“U#/™ ¿~I%ì'©vìz0Ûl¸O.G^ì#°×`‘r/æ,Q	ÑƒŒLÈ‡T×H‡ Æ5l´QŠ²+½%eL†ì3hèªÃ€©Ìw¤Æ#‹8OCv’°ŸÀ>Ëà$CÉ9à¿s÷ð¤#‚ƒ@ßÆ¸ê‚­üÉ;_Fô¤#"|Ðð>$û0‚ŒÖ‡®r½?z2Ûì!8o	øÇá/±!ŸåÝNþ¤ÑŠþ$k`ÞË¼æ…ú¶Ü0G=Þ£É¼yqèEh[•²"ïß–ñNô¦ÉWhQrä²Ý³•üçI£ýiøÇÈûï™¢†Þu¨ä³ÙæB>úXI|AÔ¿RE
}µÞï6Q[÷ŸehÊÖ}Õ9¶îÃŽYvXyËD–ÐÖýÑÍGnÝÉ‚­ûe¾,™lÝ×²¸V‘õ–‘µXG†
©*/$&yŽû.ÉŸ%édñU’#ûé@´ñ—A€ðÇÃßsE‰>¿-ÇºÁbÜbCÞ¸i?`÷Á.i"½jûÖ7^èˆà¸ï
õAð Ùƒ1d´>ø’þELÊß!áþ©øgîw[ÖÆ­$,DdÊB‚ìëc–6Úò%´Š0Üzä"Â 
Ö ÊlQ2YBP¢8“)y»¡dJ!™‚‰P'SlÅì¥H‹q‹ùq ¾næc˜ÌòÞ–‡ê7;Ù÷,¦­Vî§A˜ z/ô=0ôà»j­ÓV7ø¨¶øIà—[w?ªÚ÷ùÙ…j&ø:)>ˆ``‹RS½³çølÐ/ÄÆ2`‰½ÀŠ’÷ß¿¾îþÛ\»ßxþ×‡_u¾v†õb˜j‚‰‘¿–­ê3&>¡zò~ä{ è8?­ZË»‡iÃ9éf{`S¥|pþßàüf9W¼PÎ6›ºZ¶e]î~.÷/ÆG,»ýù¿ôò‚âI]P|~)äè¤?>¸Ø;‡ uþA‚™é]Ž~–|!‹K–{yIÄv›êçò…÷1ìšhôI\RüÏ¸$N$ùÃ
ó‡á¥*TJSiÌ_^2ñŸØñ?N²é^^3K'õãà|ºÈ'ƒÀ,…ŠOñô³$§xZ%¤xðèR²Kñô'JúçŒJú1*Á¦Kl2ÌK(qušN_ÄÏ›#“¼Q¨•.QiD_^"é³lâÓ;}Irz§Ï»Az‹f[4°——Dj7G¼Cª?Y!µãÁ Ù½’—@üor›¶ôE\1g%Iþ(,%A£K4šÒ—™Hi‹Iêaf­&)™°œ® S–ëIJ¨Ä%õ<óV””RXR‚S×p*Ï5%Cª„toÆª’¡Ò=¸t±Kù¥{‰Kêiæ­,)°´£®aTžkKJª¤Å%õ8sV—”PX^‚N—ë”ãú’’)eI=ËŒ&¥–˜`ÒÅ&e¸Æ¤DJXdRO’¾Ê¤4Â2,ºÔ"êu¦]ù]á$÷cö+¬öú<ö¡rÃìh·È:çµsIÙhÒp”2e<¼e#K¿(cK¿ – K¿_àË_â¨„aâ(üN·´fë%ï³«VíÙ7"¬Xè°âŸIØTÝwZL;õò¾\+ÞÏ6´Â”[3ÅÎ‘$ûõšÄZÄùÜ·úNÃyíá@„L¸ˆøç?ô'k8þÓjÑûj›Æ?éø³š½÷ì«gßÿ˜³jQþc0‰‡.º„ÈËM w±¨óI‚Õ¢NP.
“.7‰¼^Ô)“¯`Ôù8£N¡P2
¥®¡T5£N©¼E£Î'Š©uj…²Qxu¯r¨‰•’ú+GCJ!õƒO—û”aêç-u>OLõ¨S)”Âª«X•Cý¨S,O©óÂ¤N©PB
¥® }©S(w©ói‚U¤NPF
›.·‰¼ŽÔ)“³Ôù,¡JR§J(%…I›D]KêéÔœ}áÍó£èxF!©ƒ<éòp€2GU–&”@¨b¿ôUcŠ"4ß ƒ½ì$J+ƒˆ<5Ë­
!`ÓlÊ²"|v–ûfÖBàü,huE­2­†ˆ8CËýLsë!pŽÜº¦[¹VD„ÎÒ
>Ñœ4EpêzNå˜&—EÄŸªåÖ
…0ë:fåZ<[ËýHój#p¾´ºžVyVG„ÎØr?Ï¬úœ³£®fT–³¶ÜO3§FçmÁ¦kÙ”c•D/Sd™Dÿ iu½D(”€@—	DW)¡DáW­Ë]u:NeQ7øaÚ<‘C‰pÖ	FÈàaÂ1üâÄ–î,ãêïÑlu oa ùò0´à×â€»Úþ¤Õþ$Èþóvª7Ãë0À›ðkhhá?­ölc=!Nß¥ð§PqñçÄ!ñ[¤Tâ·üÿœÍ’Õ}~”í|šâš+T7Å¨¿ò ÈŸpà¦Ø¢U@ô¶óJ #Âô"$ˆ0â‹T…—ª9­ëÚéq“~ãâõüŠâMñ×®Â‘Ñ·Í¾äŠz¶â8¨7ÚìØ!~îï«¯œúw»o5°¿qì%5ÄÜ¿ð¤§áw·.Ûƒã¬ôþnyhñðžËÎ‹¡ó”SÔñrvXxËD–®l‘²¨ÐYôx•YfÈ2â-YœÓiuÃ¡¹´’i¨ªù,šµÇ.6±â¡‰‰•¸‰™'ˆ…·Ld‰H¬ú›O¬zYXA–ù²ä“X	Y<‰•¸ápb%¢XA…TÈ+uêP\f¥ÎzIJ­Ô%È­àÈ,G¬Äå"L8»n?:½„A~a.&›K	ãÎ°Ô-S,†:$ë@dmËÆ¹âÎh³¢o^Ž¤	Ð{¡WDÑÏž´èŽÂ‰ï"!õyªêïìX¼)ÄßÞ®:5pà¶ÐˆÑZpjªÖµýóÎl´;`Æøx×6œÿõjÿðß6ü
RöyTÕ6Õ†q–ëÓ®bâ/ß3(|]P|è/ãT¼þ Ìš!L¼0öH%ªKþ÷Ó½	‹Òw–ò¶*7|Ly¬Öß`ÈMb`FìD'~ëQcÊ½ŠMNt÷IàÉ<OlÄÑ
sÚ9_>Ýmv!Œ¼|‚ ~$.¤À7œ¥ÚµûèÁl´"?é 9ÐA_£EË¾˜ÄÄ%G24%7R#5‚³ô°ñF*Ë®ô—o<–Q%²Ìª¡D²`´0ïQ,æœÙ	Ê3À
ÿ,‡:%'ÿÖ=#Á“	}gàC²fÄNðgï¼ÙÑ“‰qBGÂ	8‘îÄ3b'ºÊù^éÉltx`Äà<'(©€ä†~v”³vý“V;þ“ ¬%€{?÷RðÛrÃ\5|_Œ6+ôæå¡—¤mUÊ*¾[vÄûÒÛ¦_ÁEÊþ‘?ÌvÏ6vúŸ'­Vþ§]à}`ïÅ¾§Š|ç–Ïf£ûè#,ñ?pE¾úôhÔq úƒ)ÇèOâ8 2Ë+q¹<`tû±ÇŒ„Áq æar9@ã\mÖ·ZnÖb`½:$ë@½à|}å9òÛ(G|Ì° /£ÙO¯¢9¬€Œ‚  A€ž,Rüù¹Öã&+öÆÅ˜ x/ð’'ZØ«æ°o½³ã…	OŠûÎPOÒ]cFì„w°ˆšt˜ @drHÿ»-k#W"4i¡AvŽu2Oo™È\en>v‘ake¾,¹,1(YÜ‰•¼á`b%£XA…TÈ+¶bŽÒ¥Å¸ÉŽý8_Þ÷QÜhh™oËCõ›ûÓf;ûÓ(L ¾üž˜àwÖi/¦ÍøQ©øÓà§.Õî~Tµ÷Ó¸NøuR~H Á@©§zçÈùÿµXÁ_Šj@?})ó¿}Ý7ü÷¹ö¼ý¯	¿}íëÊ°!Ù4"/tqu}jVe»ä]vÕª=tì½Œ*þ™DMÜÐ…ÖªËbÚ¥ßŽ÷åú·ãùÀvxEt«zØi£¤©ûšE:.R’¾[hMfjrF™(Ç²ás{™Z-÷/Ëºzßò–{UT¤÷ŠÏ/Å=,ÆÃg²èD×‚Ñu1î:°]ZþîøC•[UÅE\v²,—o—ñÂ¼ý3YšñEâÌG@”‹<jr5Ô¨©WÊX£¦úlàÌ\gæò&j¸ e¼ÄÁ€y.—‡tÄQû¯×üw%.ö¼P;e?èÀðk ßwœø /“aŒ9bW"Þ˜©e¦âñÎ²\*K6/Íä‰áaEî?Td4†X2×;n¤Ž„‡yÓÑƒ‰ŒÆPI.“$›ä°­výÿLÝè«hé;@),H±`Œû]Ü|c‘4Ûè0×€©áàJ¹Å58ÓPcgjË+fpd®#vÜH	ÔBª[Ž+…T~ z\¢G…JŽp–%o9:Ë’ÑÈ² ÈeŠd“eé½…aMô.°hQt<T!Våÿ   ÿÿ ík¾xœìTÁn1½ç+F9"¸SqRi+Jˆš¨ ¡*šx'Ùi¼¶e{7‰ÿÎx½›¦9pCA.ñÎØožß{»3òlC$ÔÈë€¦€p¨Æ’"+h0ØÊFëÁo(¼Ž ¿!ú(§QÏkçôaø†Ó:z&¡o*ÑÒ¡EuOÃ:Öeœ¡¸³~{D-((Ï.²5	rÇÄnKšÒBþª4âåbGzKX”Ö£¢÷$SW_ó¶á‚ÍBôµŠµOW¬9Æ°b[Q¢ÆJšòB¹
ã–&Œ¶j[h” ' gÙD¹»ü‘˜~Ïl¹H$WÖÐ²LßßÂ`E©sZô¸ûD¡œv½gâÁQuÜO›N…kÂ^À”Ô¶oj<ÈiéõÊôá»áöÔLl »1pŸìxè™‚U-â?‰Š^•))EG'ØQ´÷AVéP¤ ;Ù±xI’4‰r€µõUz:Qï±Ó¬Ï‹êÁf­?rèÄžÄºhÝ÷Ù›Ègû­ß ²W½ya2—D)‚J¾0p8¹DJ-'ÿ½yo£ô‡²½gWZ.–2\Qç)ÿšÛ0{Þ>Ë{g ¿N~ûvïÿ‡þýY²~{üƒí•)kB„»Ë«›ÏÓùòöf¾€wðMv&ZÒMF'ßå\ÈqÍëÉª.&?ÌH7do2ÃP]åò{T[)ÎÔre^ÚZä;_IûR¯ì.>XOØ¿x±£!wË«+]·Òßµ/ìºf×3ãM)…†ºI·´‘ç‰Ùjê±m8o°f4x Y‰‹ÁO   ÿÿ 0$´ž